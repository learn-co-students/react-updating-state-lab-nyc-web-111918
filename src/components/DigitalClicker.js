// Code DigitalClicker Component Here
import React, { Component } from 'react'


class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {
  this.setState({
    timesClicked: this.state.timesClicked + 1
  })
}
  render() {
    console.log(this.state)
    return(
      <button
        onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    )
  }

}

export default DigitalClicker;
