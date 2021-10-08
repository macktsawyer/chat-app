import React, { useState, useEffect } from 'react';
import './Chatdisplay.css';
import Input from './Input';
import Message from './Message';
import firebase from 'firebase/app'

const Chatdisplay = ({ user = null, db = null }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (db) {
            const unsubscribe = db.collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setMessages(data)
            });
            
            return unsubscribe;
        }
    }, [db])

    return (
        <div className="Window">
            <div className="Container">
                <div className="ChatTitle">
                    <h1>Chat Room</h1>
                </div>
                <div className="ChatWindow">
                    <ul className="MessagesList">
                        {messages.map(message => (
                            <li key={message.id}>
                                < Message {...message} />
                                </li>
                        ))}
                    </ul>
                </div>
                <div className="InputDiv">
                    {user ? (<Input user={user} db={db} className="input" />) : (<div className="loggedOutText">'Need to log in to chat'</div>)}
                </div>
            </div>
        </div>
    )
}

export default Chatdisplay
