import Axios from 'axios';
import { axiosInstance } from '@config/axios';

export const getUsers = async () => {
  const res = await Axios.get(`/api/users`);
  return res;
};
