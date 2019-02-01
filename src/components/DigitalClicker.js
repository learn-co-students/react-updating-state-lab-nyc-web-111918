// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  clickHandle = (event) =>{
    // console.log(event.target)
    // console.log(this.state.timesClicked + 1)
    this.setState({
      timesClicked:this.state.timesClicked + 1
    },()=>{console.log(this.state)})
  }

  render(){
    // console.log(this.state)
    // console.log(this.props)
    return(
      <button onClick={this.clickHandle}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
