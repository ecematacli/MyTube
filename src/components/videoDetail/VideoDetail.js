import React from 'react';

import './VideoDetail.css';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <h3>Loading...</h3>;
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div className="my-div">
      <div>
        <iframe
          className="selected-video"
          title="video player"
          src={videoSrc}
        />
      </div>
      <div>
        <h4>{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
