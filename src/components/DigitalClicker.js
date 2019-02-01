// Code DigitalClicker Component Here
import React from 'react';



class DigitalClicker extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  clickCounter = () => {
    console.log('clicked')
    this.setState (() => ({
      timesClicked: this.state.timesClicked + 1
    }))
  }

  render(props) {
    return (
      <button onClick={this.clickCounter}>{this.state.timesClicked}</button>
    );
  }

}

export default DigitalClicker
