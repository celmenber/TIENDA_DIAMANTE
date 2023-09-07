import FuseUtils from '@fuse/utils/FuseUtils';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import jwtServiceConfig from './jwtServiceConfig';

const baseURL = process.env.REACT_APP_API_URL;

/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalido access_token');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');
      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  signInWithEmailAndPassword = (email, password) => {
    const error = [];
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/${jwtServiceConfig.user.signIn}`, {
          users: email,
          password,
        })
        .then((response) => {
          if (response.data.success) {
            this.setSession(response.data.data.access_token);
            resolve(response.data.data.access_data);
            this.emit('onLogin', response.data.data.access_data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((err) => {
          if (err.response.data.response === 'invalid username') {
            error.push({
              type: 'email',
              message: 'Direccion de correo invalida',
            });
          }

          if (err.response.data.response === 'invalid password') {
            error.push({
              type: 'password',
              message: 'Contraseña incorrecta',
            });
          }
          // ahora toca enviarle a formulario el arreglo de errores
          resolve({ error: error[0] });
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${jwtServiceConfig.user.accessToken}`, {
          data: {
            access_token: this.getAccessToken(),
          },
        })
        .then((response) => {
          console.log(response)
          if (response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          } else {
            // this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          // this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  setSession = (access_token) => {
    console.log(access_token);
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    this.emit('onLogout', 'Logged out');
    window.location.assign('/');
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new JwtService();

export default instance;
