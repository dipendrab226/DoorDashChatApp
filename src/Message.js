import React,{Component} from 'react'
import './Message.css';

 // Component to handles if the message is being sent or received and the render accordingly
class Message extends Component {
    render() {
        if (this.props.fromMe || this.props.currUser===this.props.username){
            return (
                <div className='message-group from-me'>
                    <div className='message-body'>
                        <p>{this.props.message}</p>
                     </div>
                    <div className='username'>   
                        <h4>You</h4>
                    </div>
                </div>
            )
        } 
        else{
        return (
            <div className='message-group group-me'>
                <div>
                    <div className='message-body'>
                        <p>{this.props.message}</p>
                    </div>
                    <div className='username'>   
                        <h4>{this.props.username}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
}

export default Message