import React from 'react'
import './ChatRoomHeader.css'

// functional component to display the ChatRoom and members
const ChatRoomHeader = (props) => {
    if (!props.activeRoomName){
        return (
        <div className='room-info'>
        <p> Select a ChatRoom to see previous messages!!!</p>
        <div className='hr'></div>
        </div>
        )
    }
    return(
    <div className='room-info'>
        <h1>{props.activeRoomName}</h1>
        <p>Active: <strong>{props.activeRoomUsers.map((user) => (user + " "))}</strong></p>
        <div className='hr'></div>
    </div>
    )
}

export default ChatRoomHeader

