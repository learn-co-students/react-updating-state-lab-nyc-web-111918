// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBit = () => {
    this.setState((prev) => {
      prev.settings.bitrate = 12
    })
  }

  handleClickResolution = () => {
    this.setState((prev) => {
      prev.settings.video.resolution = "720p"
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClickBit} className={"bitrate"}>{'bitrate'}</button>
        <button onClick={this.handleClickResolution} className={"resolution"}>{'resolution'}</button>
      </div>
   )
  }
}
