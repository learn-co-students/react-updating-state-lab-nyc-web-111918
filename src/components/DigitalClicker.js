// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  tickerUp = event => this.setState({timesClicked: this.state.timesClicked + 1})

  render() {
    return (
      <button onClick={this.tickerUp}>{this.state.timesClicked}</button>
    );
  }

}

export default DigitalClicker;
