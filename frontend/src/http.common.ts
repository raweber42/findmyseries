import axios from 'axios';
import type { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  // baseURL: process.env.VITE_BASE_URL,
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
  // withCredentials: true,
});

export default apiClient;
