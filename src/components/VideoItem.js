import React from 'react';
import './VideoItem.css'



const VideoItem = ({ video, onVideoSelection }) => {
  const { snippet } = video

  const item = snippet.thumbnails.medium.url;
  const title = snippet.title;

  return (
    <div onClick={() => onVideoSelection(video)} className="video-item item">
      <img
        alt={title}
        className="ui image"
        src={item} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  )
}

export default VideoItem
