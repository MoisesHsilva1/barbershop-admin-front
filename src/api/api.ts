import axios, { type AxiosInstance } from 'axios';

import Environment from '@/config/env';

function getAPIClient(): AxiosInstance {
  return axios.create({
    baseURL: `${Environment.API_BASE_URL}/api/v2`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
}

export const api = getAPIClient();
