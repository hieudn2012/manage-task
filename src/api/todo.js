import axiosClient from "./axiosClient";

const todoApi = {
  getAll: (params) => {
    const url = '/todo';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  },

  test: () => {
    return
  }
}

export default todoApi; 