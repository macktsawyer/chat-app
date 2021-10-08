import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button'
import Chatdisplay from "./Chatdisplay";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBP0k0xnRbw8KvqhLarf-X4kfS2ieJs7eA",
  authDomain: "chat-app-595f7.firebaseapp.com",
  projectId: "chat-app-595f7",
  storageBucket: "chat-app-595f7.appspot.com",
  messagingSenderId: "382137305552",
  appId: "1:382137305552:web:5a6aafd241e01c2f9091d5",
  measurementId: "G-K0XKN6NYWL"
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
