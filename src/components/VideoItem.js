import React from 'react'

const VideoItem = ({ video }) => {
  console.log(video.snippet.thumbnails.medium.url)
  if (!video) {
    return <h3>Loading...</h3>
  }

  const item = video.snippet.thumbnails.medium.url
  return (
    <div>
      <img src={item}></img>
    </div>
  )
}

export default VideoItem
