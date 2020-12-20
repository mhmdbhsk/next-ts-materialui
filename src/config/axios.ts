import Axios, { AxiosRequestConfig } from 'axios';
import nookies, { parseCookies } from 'nookies';

export const axiosInstance = Axios.create({
  baseURL: process.env.API_BASE_URL,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // const token = parseCookies(token);

  return {
    ...config,
    headers: {
      // Authorization: `Bearer ${token}`,
      ...config.headers,
    },
  };
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response.status === 401) {
    //   localStorage.clear();
    //   window.location.href = '/';
    // } else if (error.response.status === 403) {
    //   window.location.href = '/forbidden';
    // } else if (error.response.status === 502) {
    //   window.location.href = '/bad-gateway';
    // }
    console.log('Error at interceptor  :', { ...error });
    return Promise.reject(error);
  }
);
