import React from 'react';

export default class YouTubeDebugger extends React.Component{

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

  handleBitrate=(e)=>{
    console.log(this.state.settings.bitrate);
    this.setState({
      settings:{...this.state.settings,
      bitrate: 12}
    }, ()=>{console.log(this.state.settings.bitrate)})
  }

  handleResolution=()=>{
    console.log(this.state.settings.video.resolution)
    this.setState({
      settings: {
        ...this.state.settings,
          video: {
            resolution: '720p'
          }
      }
    }, ()=>{
      console.log(this.state.settings.video.resolution);
    })

  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>change bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>change resolution</button>
      </div>
    )
  }
}
