import React from 'react'
import { formatRelative } from 'date-fns';
import './Message.css'

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
}) => {
    return (
        <div className="messageStyle">
            {photoURL ? (
                <img src={photoURL} alt="Avatar" className="avatarImage" />
            ) : null }
            {displayName ? <p>{`${displayName} - `}</p> : null}
            {createdAt?.seconds ? (
                <span className="timeStamp">
                    {`${formatRelative(new Date(createdAt.seconds * 1000), new Date())} - `}
                </span>
            ) : null }
            <p>{text}</p>
        </div>
    )
}

export default Message
