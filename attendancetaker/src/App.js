// React Tool Imports
import { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

//firebase stuff
import { app } from './utils/firebase';
import { getDatabase, ref, set, push } from 'firebase/database';
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

//css
import './css/styles.css'

// https://youtu.be/F7RvmvLBq2s?t=795
//database stuff

function App() {
  //login stuff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [uid, setUID] = useState('');

  // page stuff
  const [event, setEvent] = useState('');
  const [credit, setCredit] = useState('');

  // navigation 
  const nav = useNavigate();

  //database 
  const db = getDatabase(app)


  // button action function 
  const handleAction = (key) => {
    const authen = getAuth();
  // if they are signing up for the first time
    if (key === 2) {
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
  //if they are logging into previously made account
    if (key === 1) {
      signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
          setUID(response.user.uid);
          setName(response.user.displayName);
          console.log(response.user) 
          console.log(name)
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
    if (uid.length !== 0) {
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
      console.log("success!")

    } else {
      alert("Please relogin")
    }


  };

  
  return (
    // all page routes

        <Routes>

          <Route
            exact path='/'
            element={<Landing setEvent={setEvent} setCredit={setCredit} addEventHandler={() => addEventHandler()} name={name}/>} 
          />

          <Route 
            exact path='/needaccount' 
            element={<AccountSelection/>}
          />

          <Route 
            exact path='/login' 
            element={<Form title="Login" setEmail={setEmail} setPassword={setPassword}  handleAction={() => handleAction(1)}/>}
          />

          <Route 
            exact path='/register' 
            element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} setName={setName} handleAction={() => handleAction(2)}/>}
          />


        </Routes>
        
  );
}



export default App;
