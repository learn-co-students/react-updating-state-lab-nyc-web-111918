// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor(props){
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

  bitrateChanger = () => {
    this.setState({
    settings: {...this.state.settings,
      bitrate: 12}
    })
  }

  updateResolution = () => {
    this.setState({
      settings: {...this.state.settings,
      video: {resolution: '720p'}}}
    )
  }


  render() {
    return (
    <div>
      <button className='bitrate' onClick={this.bitrateChanger}> change bitrate </button>
      <button className='resolution' onClick={this.updateResolution}> resolution </button>
    </div>
    )
  }
}

export default YouTubeDebugger
