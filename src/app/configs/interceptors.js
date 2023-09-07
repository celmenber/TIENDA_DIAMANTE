import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
/*
const stringTOKEN =
  sessionStorage.getItem('jwt_access_token') !== undefined
    ? sessionStorage.getItem('jwt_access_token')
    : '';

const TOKEN = `Bearer ${stringTOKEN}`;
*/
const AXIOS = axios.create({
  baseURL: API_URL,
});
/*
AxiosPrivado.interceptors.request.use(
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
*/

export default AXIOS;
