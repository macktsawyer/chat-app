import React from 'react'
import './Button.css'

const Button = ({ onClick = null, children = null}) => {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    )
}

export default Button
