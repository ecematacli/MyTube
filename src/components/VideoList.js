import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelection }) => {
  // console.log(videos)
  return videos.map(video => {
    return (
      <div
        className="ui relaxed divided list"
        key={video.id.videoId}>
        <VideoItem
          video={video}
          onVideoSelection={onVideoSelection} />
      </div>
    )
  })
}

export default VideoList
