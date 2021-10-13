import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button'
import Chatdisplay from "./Chatdisplay";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      if (loading) {
        setLoading(false);
      }
    });

    return unsubscribe;
  },[loading])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(provider)
    } catch (err) {
      console.error(err)
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message)
    }
  }

  if (loading) return "Loading..."

  return (
    <div className="App">
      {user ? 
      (<Button className="signOutButton" onClick={signOut}>Sign Out</Button>) : (
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      )}
      < Chatdisplay user={user} db={db} />
    </div>
  );
}

export default App;
