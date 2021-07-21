import axios from 'axios';
const LIMIT_REQUEST = 50;

const coinCapAPI = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
  responseType: 'json',
});

export { LIMIT_REQUEST, coinCapAPI };
