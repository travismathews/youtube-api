import axios from "axios";

const KEY = "AIzaSyB4TP-VWrEGj74MmZN9xpDNcjvXo8tvRPU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
