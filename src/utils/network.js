import axios from 'axios';

import ENV from 'utils/env';

export const PROD_API_URL = 'https://reqres.in/api';
export const TEST_API_URL = 'https://reqres.in/api/';
export const DEV_API_URL = 'https://reqres.in/api/';

function getBaseURL() {
  if (ENV.NODE_ENV === 'prod') {
    return PROD_API_URL;
  } else if (ENV.NODE_ENV === 'test') {
    return TEST_API_URL;
  } else {
    return DEV_API_URL;
  }
}

export const baseURL = getBaseURL();

const Network = axios.create({ baseURL });

export default Network;

export const setAuthorizationHeader = token => {
  Network.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  delete Network.defaults.headers.common['Authorization'];
};
