// React Tool Imports
import { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

//firebase stuff
import { app } from './utils/firebase';
import { getDatabase, ref, set, push, get, child } from 'firebase/database';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'


// Component Imports 
import AccountSelection from './components/accountSelection';
import Form from './components/Form';
import Landing from './components/landing'
import Finished from './components/finished'
import Reader from './components/reader'
import Results from './components/fetchResults'

//css
import './css/styles.css'

// https://youtu.be/F7RvmvLBq2s?t=795
//database stuff

function App() {
  //login stuff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [uid, setUID] = useState('');

  // Reading Data
  const [readerName, setReaderName] = useState('');
  const [finalData, setFinalData] = useState([]);
  const [creditSearch, setCreditSearch] = useState('')
  const [dateSearch, setDateSearch] = useState('')

  // form stuff 
  const credits = ["Select Credit", "Chapter", "Scholarship", "Service", "Recruitment", "Leadership"]
  // TODO: add event and add date
  const events = [
                 // ADD EVENTS HERE
    { eventName: "Initiate Service Event", eventDate: "10-31-2024" },
    { eventName: "Initiate Scholarship Event", eventDate: "11-06-2024" },
    { eventName: "Chapter", eventDate: "11-06-2024" },
    { eventName: "Ritual", eventDate: "11-08-2024" },
    { eventName: "Chapter", eventDate: "11-13-2024" }

    // Add more events as needed
  ];
  // submitting new event stuff
  const [event, setEvent] = useState('');
  const [credit, setCredit] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');

  // navigation 
  const nav = useNavigate();

  //database 
  const db = getDatabase(app)


  // button action function 
  const loginAction = (e, key) => {
    e.preventDefault();
    const authen = getAuth();
  // if they are signing up for the first time
    if (key === 2) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else if (password.length < 6) {
        alert("Your password must be at least 6 characters long.");
      } else if (name.length === 0) {
        alert("fill out the name field");
      } else {
        createUserWithEmailAndPassword(authen, email, password)
          .then((response) => {
            setUID(response.user.uid);
            updateProfile(response.user, {
              displayName: name
            });

            // throw their name in the database for later display
            set(ref(db, `users/${response.user.uid}/name`), name);


            nav('/');
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          })
          .catch((error) => {
            console.log(error);
            alert("bad info")
          })
      }
    }
  //if they are logging into previously made account
    if (key === 1) {
      signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
          setUID(response.user.uid);
          setName(response.user.displayName);
          nav('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error);
          alert("bad info");
        })
    }
  }

  // Handler for sending event data to the firebase server
  const addEventHandler = async () => {
    // code to get the current date
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    date = mm + '/' + dd + '/' + yyyy;

    // the UID can be lost when the session expires so this ensures it's there before they query 
    if (uid.length === 0) {
      alert("Seems like your credentials have expired, please relogin");
    } else if (credit === "" || event === "") {
      alert("Please Select a Credit / Event");
    } else {
      // everything is all good, send the data
      const logRef = push(ref(db, "attendanceLog"));
      await set(ref(db, `users/${uid}/events/${logRef.key}`), logRef.key);
      await set(logRef, {
        uid,
        event,
        credit,
        date
      });

      setEvent('');
      setCredit('');
      nav('/finished')

    } 
  };

  // handles the logout button
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    nav('/needAccount')
  }
  

  const fetchData = async (searchType) => {
    if (uid.length === 0) {
      alert("Seems like your credentials have expired, please relogin");
      return;
    }

    const dbRef = ref(getDatabase());
    let eventData = {};
    let userData = {};
    let finalList = [];

    // Gets all the Users
    await get(child(dbRef, `users`)).then((snapshot) => {
      if (snapshot.exists()) {
        userData = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    //Gets all the Events
    await get(child(dbRef, `attendanceLog`)).then((snapshot) => {
      if (snapshot.exists()) {
        eventData = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    const userKeys = Object.keys(userData)
    const eventKeys = Object.keys(eventData)

    if (searchType === 1) {
    // CHAPER SEARCH
    setReaderName("") // i do this so when i do the display on the next page it is nothing
    userKeys.forEach((userKey, i) => {
        //extracting the name out of the json
        let userObject = {};
        let user = userData[userKey];
        let currentName = user["name"];
        userObject["name"] = currentName;
        
        if (currentName !== undefined) {
          let userEventList = [];

          eventKeys.forEach((eventKey, j) => {
            let currentEvent = eventData[eventKey]
            let eventUID = currentEvent["uid"];
            let eventCredit = currentEvent["credit"];
            let eventDate = currentEvent["date"];
            if (eventUID === userKey && eventCredit === "Chapter" && dateSearch === eventDate ) {
              userEventList.push(currentEvent);
            }
          });
          userObject["events"] = userEventList;
          if (userObject["events"].length !== 0) {
            finalList.push(userObject);

          }

        }
      });

   } else { //searchType === 2


      // CREDIT SEARCH

      setDateSearch("") // i do this so when i do the display on the next page it is nothing

      // finds all the users that meet the search criteria and stores 
      userKeys.forEach((userKey, i) => {
        //extracting the name out of the json
        let userObject = {};
        let user = userData[userKey];
        let currentName = user["name"];
        userObject["name"] = currentName;
        // NEED the undefined short circuit incase someone gets an account through with no name
        if (currentName !== undefined && currentName.toLowerCase().includes(readerName.toLowerCase())  ) {
          // console.log("Found a match with " + currentName + " and " + readerName.toLowerCase());
          
          let userEventList = [];

          // for each event in the list, checks to see if it matches the current name 
          // and the current credit search term
          eventKeys.forEach((eventKey, j) => {
            let currentEvent = eventData[eventKey]
            let eventUID = currentEvent["uid"];
            if (eventUID === userKey && creditSearch === currentEvent["credit"]) {
              userEventList.push(currentEvent);
            }
          });
          userObject["events"] = userEventList;
          if (userObject["events"].length !== 0) {
            finalList.push(userObject);

          }

        } 
      });
      // Assuming this is part of your App component in App.js
// const eventSearch = () => {
//   const selectedEventName = document.getElementById('event').value;
//   fetchData(3, selectedEventName);
// }

// Assuming fetchData function is defined above this block


    }

    
    // if (searchType === 3) {
    //   // EVENT SEARCH
    //   setEventSearch("") // i do this so when i do the display on the next page it is nothing

    //   userKeys.forEach((userKey, i) => {
    //     //extracting the name out of the json
    //     let userObject = {};
    //     let user = userData[userKey];
    //     let currentName = user["name"];
    //   });
    // }

  // Now, filteredUserData contains the user keys that match the selected event
  // You can do something with this filtered data here

    


    // console.log(finalList);
    setFinalData(finalList);
    nav('/readerResults')
  }

  const handleSearch = () => {
    setReaderName("");
    setDateSearch("");
    nav('/reader')
  }

  
  return (
    // all page routes

        <Routes>

          <Route
            exact path='/'
            element={<Landing credits={credits} events={events} setEvent={setEvent} setCredit={setCredit} addEventHandler={() => addEventHandler()} name={name} handleLogout={handleLogout} handleSearch={handleSearch}/>} 
          />

          <Route 
            exact path='/needaccount' 
            element={<AccountSelection/>}
          />

          <Route 
            exact path='/login' 
            element={<Form title="Login" setEmail={setEmail} setPassword={setPassword}  loginAction={(event) => loginAction(event, 1)}/>}
          />

          <Route 
            exact path='/register' 
            element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setName={setName} loginAction={(event) => loginAction(event, 2)}/>}
          />

          <Route
            exact path='/finished'
            element={<Finished name={name} handleLogout={handleLogout}/>}
          />

          <Route 
            exact path='/reader'
            element={<Reader credits={credits} chapterSearch={() => fetchData(1)} creditSearch={() => fetchData(2)} setReaderName={setReaderName} setCreditSearch={setCreditSearch} setDateSearch={setDateSearch} handleLogout={handleLogout}/>}
          />

          <Route
            exact path='/readerResults'
            element={<Results goBack={handleSearch} data={finalData} nameSearch={readerName} dateSearch={dateSearch}/>}
          />

        </Routes>
        
  );
}


export default App;
