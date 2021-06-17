import React,{Component} from 'react'
import axios from 'axios'
import ChatRoom from './ChatRoom';
import SessionTimer from './SessionTimer.js';
import './Navigation.css'

class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            rooms: [],
            activeRoomId: 0
        }
    }
    // Lifecycle method to retrieve the names of all the rooms
    componentDidMount() {
        axios.get('http://localhost:8080/api/rooms')
            .then(res => {
                const rooms = res.data.map(room => room);
                this.setState({ rooms });
            });
    }
    // handles the event when the user switches the room
    changeRoomHandler = (id, name) => {
        this.props.onChange(id, name);
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='profile-info'>
                    <h2 className='user'> {this.props.name}</h2>
                    <SessionTimer />
                </div>

                <div className='room-info-nav'>
                    <h1 className='chatrooms-title'>Chatrooms</h1>
                    <div className='rooms-container'>
                        {this.state.rooms.map((room, i) => (
                            <ChatRoom
                                key={i}
                                id={room.id}
                                name={room.name}
                                onClick={this.changeRoomHandler}
                                activeRoomId={this.props.activeRoomId}
                            />
                        ))}
                 </div>
                <div className='log-out'>
                    <a href='/'>Exit</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Navigation