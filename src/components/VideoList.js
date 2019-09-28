import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  console.log(videos)
  return videos.map(video => {
    return (
      <div key={video.id}>
        <VideoItem video={video} />
      </div>
    )
  })
}

export default VideoList
