import axios from 'axios';
import { refreshToken } from 'services/user';
import _emitter from 'utils/emitter';
import { setLocalStorage } from 'utils/setLocalStorage';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('AuthToken');
    config.headers.Authorization = token || '';
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line consistent-return
  async (error) => {
    const { config } = error;
    let refreshTokenRequest = null;
    if (error.response.status === 403 && !config._retry) {
      config._retry = true;
      try {
        refreshTokenRequest = refreshTokenRequest || refreshToken();
        const res = await refreshTokenRequest;
        refreshTokenRequest = null;

        config.headers.Authorization = `Bearer ${res?.data?.access_token}`;
        setLocalStorage(res?.data?.access_token, res?.data?.refresh_token);
        return instance(config);
      } catch (er) {
        return Promise.reject(er);
      }
    } else if (error.response.status === 500) {
      _emitter.emit('error');
    } else {
      _emitter.emit('expire');
    }
  },
);

export default instance;
