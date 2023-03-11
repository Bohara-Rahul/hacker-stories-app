import axios from "axios";

const storyApi = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1'
});

export default storyApi;