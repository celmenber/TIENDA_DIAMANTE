import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const stringTOKEN =
  localStorage.getItem('access_token') !== undefined ? localStorage.getItem('access_token') : '';

const TOKEN = `Bearer ${stringTOKEN}`;

const AXIOS = axios.create({
  baseURL: API_URL,
});

AXIOS.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: TOKEN,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AXIOS;
