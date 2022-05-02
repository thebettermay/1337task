import axios from 'axios';
import UserEntity from '@/typings/user';

const BASE_URL = process.env.VUE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: process.env.VUE_APP_API_TOKEN,
  },
});

const getUsers = async (): Promise<UserEntity[]> => {
  const { data } = await axiosInstance.get<UserEntity[]>(`${BASE_URL}`);
  return data;
};
export default getUsers;
