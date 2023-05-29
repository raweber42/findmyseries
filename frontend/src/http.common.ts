import axios from 'axios';
import type { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://findmyseries.xyz/backend',
  // baseURL: 'http://backend.default.svc.cluster.local:3000', // TODO check why this doesnt work!!!####################3
  // baseURL: 'http://192.168.59.100/backend:3000', // "default" refers to namespace

  headers: {
    'Content-type': 'application/json',
  },
  // withCredentials: true,
});

export default apiClient;
