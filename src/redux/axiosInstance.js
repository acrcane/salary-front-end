import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://salary-back-end.onrender.com',
    withCredentials: false
})

$api.defaults.withCredentials = false

$api.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {

        localStorage.removeItem('persist:auth');

        // window.location.href = '/sign-in';

      }
      
      return Promise.reject(error);
    }
  );