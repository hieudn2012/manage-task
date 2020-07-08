import axiosClient from "./axiosClient";

const taskApi = {
  getAll: (params) => {
    const url = '/tasks';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/tasks/${id}`;
    return axiosClient.get(url);
  },
}

export default taskApi; 