import axios from 'axios';

const instance = axios.create({
  timeout: 50000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // eslint-disable-next-line
      console.log('response error', error.response);
      // if (error.response.data.detail === 'Invalid token.') {

      // }
      return Promise.reject(error.response);
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // eslint-disable-next-line
      console.log('request error', error.request);
      return Promise.reject(error.request);
    }
    // Something happened in setting up the request that triggered an Error
    // eslint-disable-next-line
    console.log('general error', error.message);
    return Promise.reject(error);
  }
);

export default instance;
