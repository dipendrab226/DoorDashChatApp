import React,{Component} from 'react'
import './InputMessage.css'

// Class to handle the event when any active user sends a message
class InputMessage extends Component {
    constructor() {
        super()

        this.state = {
            messageInput: ''
        }
    }
    // this function gets called when the text in the input field changes
    textChangeHandler = (event) => {
        this.setState({ messageInput: event.target.value })
        console.log("state.messageInput: " + this.state.messageInput);
    }
    // sends the message to websocket as well as to append to the current group message
    sendHandler = (event) => {
        event.preventDefault()
        this.props.onSend(this.state.messageInput)
        const newMessage = this.state.messageInput
        const wsMessage = { name: this.props.name, message: newMessage, fromMe:false}
        this.props.wsFunc(wsMessage)
        this.setState({ messageInput: '' })
    }

    render() {
        return (
            <div className='message-input-container'>
                <form className="message-input" onSubmit={this.sendHandler}>
                    <input type="text"
                        className='message-send'
                        onChange={this.textChangeHandler}
                        value={this.state.messageInput}
                        placeholder="Type a message..."
                        required />
                    <button type="submit" value="SEND">SEND</button>
                </form>
            </div>
        );
    }
}

export default InputMessage