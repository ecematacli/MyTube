import React from 'react'
import SearchBar from './SearchBar'
import youtube from './api/youtube'
import VideoList from './VideoList'

class App extends React.Component {
  state = {
    videos: []
  }
  onSubmission = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div>
        <SearchBar onSubmission={this.onSubmission} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
