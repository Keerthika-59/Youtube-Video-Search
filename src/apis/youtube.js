import axios from "axios";

const KEY = "AIzaSyB_TKVHPnfUjwxGX0ymz2bwR4ElDsBe_CM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
