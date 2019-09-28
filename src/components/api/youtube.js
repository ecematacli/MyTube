import axios from 'axios'

const KEY = 'AIzaSyDGNEHKSDh7U7nHDQNt7lpUMUP8okH4Seg'
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY
  }
})

export default youtube
