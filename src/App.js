import React, { Component } from 'react';
import './App.css';
import ChatApp from './ChatApp';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      submitted: false,
    }
  }
    // handles when the username changes
  usernameChangeHandler=(event) =>{
    this.setState({ username: event.target.value });
  }

  // handles the form submission
  usernameSubmitHandler=(event) =>{
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // when the form is submitted when move to the ChatRooms
      return (
        <div className="App">
          <ChatApp username={this.state.username} />
        </div>
      )
    }

    return (
      <div className='container'>  
        <div className='login-wrapper'>
          <div className='login-content'>
            <div className='img-wrapper'>
                <div className='login-img' />
            </div>
    
            <h4 className='welcome'>Welcome to Dash Chat</h4>
            <form onSubmit={this.usernameSubmitHandler} className='username-container'>
              <div>
                <input
                  type="text"
                  onChange={this.usernameChangeHandler}
                  placeholder="Enter your username..."
                  className='username-entry'
                  required />
              </div>
              <input type="submit" value="Join" className='btn-login'/>
            </form>
            <p id='disclaimer'>By joining, you agree to DoorDash Chat terms and conditions.<br/>
            </p>
            </div>
          </div>
      </div>
    )
  }
}
export default App;
