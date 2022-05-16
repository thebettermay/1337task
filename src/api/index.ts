import axios from 'axios';
import { UserEntity } from '@/types/user';

const BASE_URL = process.env.VUE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: process.env.VUE_APP_API_TOKEN,
  },
});
// { "header": "Authorization: api-key 14:2022-04-28:sandra.aberg@1337.tech 5dfe26731c1792ab8172c34b9904ae4e4beca2e56c887be7912e8371b86857d3",
// "exampleCurl": "curl --location -v 'https://api.1337co.de/v3/employees' --header 'Authorization: api-key 14:2022-04-28:sandra.aberg@1337.tech 5dfe26731c1792ab8172c34b9904ae4e4beca2e56c887be7912e8371b86857d3'" }

const getUsers = async (): Promise<UserEntity[]> => {
  const { data } = await axiosInstance.get<UserEntity[]>(`${BASE_URL}`);
  return data;
};
export default getUsers;
