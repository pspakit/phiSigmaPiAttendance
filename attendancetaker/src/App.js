// Tool Imports
import { useState, useEffect} from 'react';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

//firebase stuff
import { app } from './utils/firebase';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth'


// Component Imports 
import AccountSelection from './home';
import Form from './components/Form';
import Landing from './components/landing'


function App() {

  //login stuff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  // navigation 
  const nav = useNavigate();

  // button action function 
  const handleAction = (key) => {
    const authen = getAuth();
  // if they are signing up for the first time
    if (key === 2) {
      createUserWithEmailAndPassword(authen, email, password)
        .then((response) => {
          nav('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          alert("bad info")
        })
    }
  //if they are logging into previously made account
    if (key === 1) {
      signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
          nav('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          alert("bad info")
        })
    }
  }

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem('Auth Token')

  //   if (authToken) {
  //     nav('/')
  //   }
  // }, [])
  
  return (
    // all page routes

        <Routes>

          <Route
            exact path='/'
            element={<Landing/>} 
          />

          <Route 
            exact path='/needaccount' 
            element={<AccountSelection/>}
          />

          <Route 
            exact path='/login' 
            element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/>}
          />

          <Route 
            exact path='/register' 
            element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)}/>}
          />


        </Routes>
        
  );
}



export default App;
