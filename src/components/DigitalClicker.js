import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  onClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
