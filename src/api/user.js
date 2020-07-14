import axiosClient from "./axiosClient";

const userApi = {
  login: (body) => {
    const url = '/users/login';
    return axiosClient.post(url, body);
  },
  register: (body) => {
    const url = '/users/register';
    return axiosClient.post(url, body);
  },
}

export default userApi; 