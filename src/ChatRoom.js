import React, {Component} from 'react'
import './ChatRoom.css'

class ChatRoom extends Component {
    // handles the event when the user clicks on a ChatRoom
    handleClick = (event) => {
        event.preventDefault();
        console.log('event.target.value:' + event.target.innerText);
        this.props.onClick(event.target.id, event.target.innerText);
    }

    render() {
        return (
            <div className='room' id={this.props.id}>
                <div className={'room-icon ' + 'room-' + this.props.id}/>
                <a href="#" onClick={this.handleClick} id={this.props.id} >{this.props.name}</a>
            </div>
        )
    }
}

export default ChatRoom