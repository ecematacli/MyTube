import React from 'react';
import VideoItem from '../videoItem/VideoItem';

const VideoList = ({ videos, onVideoSelection }) =>
  videos.map(video => (
    <div className="ui relaxed divided list" key={video.id.videoId}>
      <VideoItem video={video} onVideoSelection={onVideoSelection} />
    </div>
  ));

export default VideoList;
