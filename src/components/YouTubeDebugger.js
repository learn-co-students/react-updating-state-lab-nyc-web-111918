import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

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

  onClick = (arg) => {
    if (arg === 'bitrate') {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }
    else {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }
  }

  render () {
    return (
      <div>
        <button className = 'bitrate' onClick={() => this.onClick('bitrate')}></button>
        <button className = 'resolution' onClick={() => this.onClick('resolution')}></button>
      </div>
    )
  }
}
