import React,{Component} from 'react';
import axios from 'axios';
import ListMessage from './ListMessage';
import InputMessage from './InputMessage';
import Navigation from './Navigation';
import ChatRoomHeader from './ChatRoomHeader';
import './ChatApp.css'

const URL = 'ws://localhost:3030'
class ChatApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            username: this.props.username,
            activeRoomId: 0,
            activeRoom: '',
            activeRoomUsers: []
        }
    }
    // create a new websocket instance
    ws = new WebSocket(URL)

    //websockets methods for mounting the websocket methoods for listening the messages
    componentDidMount(){
         this.ws.onopen = () => {
            console.log('connected');
          }
      
          this.ws.onmessage = evt => {
            console.log(evt.data);
            const currMessage = JSON.parse(evt.data);
            this.addMessage(currMessage);
          }
      
          this.ws.onclose = () => {
            console.log('disconnected');
            this.setState({
              ws: new WebSocket(URL),
            })
          }
        }

    // function to fetch messages on room change and update active room
    updateRoomHandler = (roomId, roomName) => {
        axios.get('http://localhost:8080/api/rooms/' + roomId + '/messages')
            .then(res => {
                const messages = res.data.map(message => message);
                this.updateRoom(messages, roomId, roomName);
            });
    }

    // updates the selected room and retrieves information related to it
    updateRoom = (messages, roomId, roomName) => {
        axios.get('http://localhost:8080/api/rooms/' + roomId)
            .then(res => {
                this.setState({
                    messages: messages,
                    activeRoomId: roomId,
                    activeRoom: roomName,
                    activeRoomUsers: res.data.users
                });
            })

    }

    // function to add user submitted messages to both the server and update UI
    sendMessageHandler = (message) => {
        axios.post('http://localhost:8080/api/rooms/' + this.state.activeRoomId + '/messages', {
            name: this.props.username,
            message: message
        }).then(() => {
            const messageObj = {
                name: this.props.username,
                message: message,
                fromMe: true
            };
            this.addMessage(messageObj);
        });
    }
    // function to add recently sent messages to the pre-existing messages in the group
    addMessage = (messageObj) => {
        console.log(messageObj);
        const messages = this.state.messages;
        messages.push(messageObj);
        this.setState({ messages:messages });
    }
    // function to send the new message to the websocket server
    wsFunction = (sendMessageToAll) => {
        this.ws.send(JSON.stringify(sendMessageToAll))
    }

    render() {
        return (
            <div className='chatapp'>
                
                <Navigation
                    name={this.state.username}
                    onChange={this.updateRoomHandler}
                    activeRoomId={this.state.activeRoomId} />
                <ChatRoomHeader
                    activeRoomName={this.state.activeRoom}
                    activeRoomUsers={this.state.activeRoomUsers}/>
                <ListMessage
                    messages={this.state.messages} 
                    currUser={this.state.username}/>
                <InputMessage
                    onSend={this.sendMessageHandler} 
                    wsFunc={this.wsFunction}
                    name={this.state.username}/>
            </div>
        
        )
    }

}

export default ChatApp



