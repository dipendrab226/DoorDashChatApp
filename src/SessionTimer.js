import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// class to keep the timer once the user joins the ChatRooms
class SessionTimer extends Component {
    constructor () {
      super()
      this.state = {count: 1}
    }
    componentWillMount() {
      this.startTimer();
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='timer'>
        <p> Online for <span>{this.state.count}s</span> </p>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <SessionTimer />,
    document.getElementById('root')
  )

  export default SessionTimer