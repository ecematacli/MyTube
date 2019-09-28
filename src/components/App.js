import React from 'react'
import SearchBar from './SearchBar'
import youtube from './api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.onSubmission('buildings')
  }
  onSubmission = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }
  onVideoSelection = (selectedVideo) => {
    this.setState({ selectedVideo })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmission={this.onSubmission} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <VideoList
              videos={this.state.videos}
              onVideoSelection={this.onVideoSelection} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
