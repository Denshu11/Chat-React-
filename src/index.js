import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
firebase.initializeApp({
     apiKey: "AIzaSyCBIKJMUP-xET9sObaiqGU9CYz81NBjEUg",
     authDomain: "chat-a4fb9.firebaseapp.com",
     projectId: "chat-a4fb9",
     storageBucket: "chat-a4fb9.appspot.com",
     messagingSenderId: "759036161653",
     appId: "1:759036161653:web:1c8db766c825881dac123c",
     measurementId: "G-KQ1MXM5B57"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

