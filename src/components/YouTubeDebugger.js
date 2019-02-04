// Code YouTubeDebugger Component Here
import React, { Component } from 'react'


class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  clickForBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  clickForResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    console.log(this.state.settings.bitrate);
    return(
      <div>
        <button
          onClick={this.clickForBitrate}
          className="bitrate">
        </button>
        <button
          onClick={this.clickForResolution}
          className="resolution">
        </button>
      </div>
    )
  }

}

export default YouTubeDebugger;
