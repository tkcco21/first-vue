import axios from 'axios';

export default axios.create({
  baseURL: SERVICE_URL,
});
