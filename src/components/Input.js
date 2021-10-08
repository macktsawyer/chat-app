import React, { useState } from 'react';
import './Input.css';
import firebase from 'firebase/app'

const Input = ({user = null, db = null}) => {
    const [newMessage, setNewMessage] = useState();
    const { uid, displayName, photoURL } = user;

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
        setNewMessage('');
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
            <input value={newMessage} onChange={handleOnChange} type="text" name="chat" className="InputBox" />
            <button type="submit" name="submit" className="SubmitButton">Send</button>
            </form>
        </div>
    )
}

export default Input
