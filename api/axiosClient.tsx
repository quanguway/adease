import axios from 'axios';
import queryString from "query-string"

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
   paramsSerializer: {
    serialize: (params) => queryString.stringify(params, {arrayFormat: 'bracket'})
  },
});

// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     return config;
// })

axiosClient.interceptors.response.use(async (response) => {
  if (response && response.data) {
      return response.data;
  }
  return response;
}, (error) => {

throw error;
});
    
export default axiosClient;