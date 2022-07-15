import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjaHVuZ29jYmluaC4xNjdAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3ODExNjM2LCJleHAiOjE2NTc4OTgwMzZ9.CQvx2f2JboQ5S4N_NdDBeM0W4EQ2NCKhw2WM3NkE0Qo';
    config.headers.Authorization = token || '';
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error),
);

export default instance;
