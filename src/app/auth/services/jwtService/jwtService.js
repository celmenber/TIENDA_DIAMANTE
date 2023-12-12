import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwtServiceConfig from './jwtServiceConfig';

/* eslint-disable camelcase */

const baseURL = process.env.REACT_APP_API_URL;

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
            this.emit('onAutoLogout', 'Invalid access_token');
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
        .post(`${baseURL}/${jwtServiceConfig.signIn}`, {
          users: email,
          password,
        })
        .then((response) => {
          if (response.data.success === true) {
            const { access_token, access_data } = response.data.data;
            const user_data = {
              uuid: access_data.ID_USER,
              role: access_data.USER_ROL,
              data: {
                displayName: access_data.NOMBRES,
                photoURL: `assets/images/avatars/${access_data.AVATAR}`,
                email: access_data.USERNAME,
                settings: {
                  layout: {},
                  theme: {},
                },
                shortcuts: [],
              },
            };
            const roll_data = JSON.parse(JSON.stringify(access_data));
            localStorage.setItem('RollUser', roll_data.USER_ROL);
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('access_data', JSON.stringify(user_data));

            this.setSession(access_token);
            resolve(user_data);
            this.emit('onLogin', user_data);
          }
        })
        .catch((e) => {
          console.log(e.response.data);
          const { success, response } = e.response.data;
          if (response === 'invalid username' && success === false) {
            error.push({
              type: 'email',
              message: 'Direccion de correo invalida',
            });
          }

          if (response === 'invalid password' && success === false) {
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
      const access_token = window.localStorage.getItem('jwt_access_token');
      const access_User = JSON.parse(window.localStorage.getItem('access_data'));
      if (access_User) {
        this.setSession(access_token);
        resolve(access_User);
      } else {
        this.logout();
        reject(new Error('Failed to login with token.'));
      }
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      localStorage.removeItem('access_token');
      localStorage.removeItem('RollUser');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    this.emit('onLogout', 'Logged out');
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
