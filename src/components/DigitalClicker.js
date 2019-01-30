// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  handleClick = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
    console.log(this.state.timesClicked);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}
