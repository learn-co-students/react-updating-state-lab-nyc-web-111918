// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props){
    super(props)

    this.state = { errors: [],
      user: null,
      settings:{
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  clickHandle= (event)=>{
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }
    //console.log(event)


  changeVideo = (event)=>{
    this.setState({
      settings:{
        ...this.state.settings,
        video:{ resolution: '720p'}
      }
    },()=>{console.log(this.state)})
  }

  render() {
    // console.log('...:',...this.state.settings)
    // console.log('this.state.settings',this.state.settings)
  //  console.log(this.state.settings.video.resolution)
    return(
      <div>
      <button onClick={this.clickHandle}className="bitrate"> Button:{this.state.settings.bitrate}</button>
      <button onClick={this.changeVideo}className="resolution"> Button:{this.state.settings.video.resolution}</button>
      </div>
  )
  }
}

export default YouTubeDebugger
