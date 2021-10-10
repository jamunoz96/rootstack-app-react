import axios from 'axios';
import config from './config';

function getToken() {
  return localStorage.getItem('auth_token');
}

export default axios.create({
  baseURL: config.api_url,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});
