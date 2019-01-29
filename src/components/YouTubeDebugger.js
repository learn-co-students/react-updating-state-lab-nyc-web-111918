// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{
  constructor(){
    super()
    this.state={
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


  changeBitrate = () => {
    let newSettings={...this.state.settings}
    newSettings.bitrate=12
    this.setState({
      settings: newSettings
    })
  }
  changeResolution = () => {
    let newSettings={...this.state.settings}
    newSettings.video={resolution: '720p'}
    this.setState({
      settings: newSettings
    })
  }

  render(){
    return (
      <form>
        <button className="bitrate" onClick={this.changeBitrate} type="button"></button>
        <button className="resolution" onClick={this.changeResolution} type="button"></button>
      </form>
    )
  }
}
