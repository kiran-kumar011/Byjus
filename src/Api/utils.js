import axios from './axios';

const url = 'https://still-sea-81590.herokuapp.com';

const post = async ({ apiUrl, params = {} }) => {
  return axios
    .post(url + apiUrl, params)
    .then((response) => ({
      request: params,
      response: response.data,
      error: null,
    }))
    .catch((err) => ({ request: params, response: null, error: err.data }));
};

const get = ({ apiUrl, params = {} }) => {
  return axios
    .get(url + apiUrl)
    .then((response) => ({
      request: params,
      response: response.data,
      error: null,
    }))
    .catch((err) => ({ request: params, response: null, error: err }));
};

export { post, get };
