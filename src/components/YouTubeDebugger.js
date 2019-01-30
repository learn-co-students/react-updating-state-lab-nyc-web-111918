// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  } // End of state

  handleClick = (e) => {
    if (e.target.className === 'bitrate'){
      this.setState({
        settings: {
          bitrate: 12
        }
      })
    }
    else if (e.target.className === 'resolution'){
      this.setState({
        settings:{
          video:{
            resolution: '720p'
          }
        }
      })
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }
  //   this.setState({
  //     settings:{
  //       video:{
  //         resolution: '720p'
  //       }
  //     }
  //   })
  // }

  render() {
    console.log(this.state.settings);
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitrate}>.bitrate</button>
        <button className='resolution' onClick={this.handleResolution}>.resolution</button>
      </div>
    )
  } // End of render()

} // End of YouTubeDebugger Component
