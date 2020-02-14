import React from 'react';

import logo from '../assets/logo.png';
import SearchBar from './searchBar/SearchBar';
import youtube from './api/youtube';
import VideoList from './videoList/VideoList';
import VideoDetail from './videoDetail/VideoDetail';
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSubmission('buildings');
  }
  onSubmission = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelection = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    const logoStyle = {
      width: 75,
      height: 75,
      margin: '20px 20px -5px'
    };
    return (
      <div>
        <div>
          <img style={logoStyle} alt="logo" src={logo} />
        </div>
        <SearchBar onSubmission={this.onSubmission} />
        <div>
          <VideoDetail selectedVideo={this.state.selectedVideo} />
        </div>
        <VideoList
          videos={this.state.videos}
          onVideoSelection={this.onVideoSelection}
        />
      </div>
    );
  }
}

export default App;
