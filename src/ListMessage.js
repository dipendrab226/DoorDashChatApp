import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import Message from './Message';
import './ListMessage.css';

class ListMessage extends Component {
    componentDidUpdate() {
        this.scrollToBottom();
    }
    // function to scroll through the messagelist
    scrollToBottom() {
        ReactDOM.findDOMNode(this.refs.messageList).scrollTop = ReactDOM.findDOMNode(this.refs.messageList).scrollHeight;
        console.log("scrolled");
    }

    render() {
        return (
            <div className='messages' id='messageList' ref='messageList' >
                {this.props.messages.map((message, i) => (
                    <Message
                        key={i}
                        currUser={this.props.currUser}
                        username={message.name}
                        message={message.message}
                        fromMe={message.fromMe}
                    />
                ))}
            </div>
        )
    }
}

export default ListMessage