import axiosClient from "./axiosClient";

const checkin = {
  getAll: (params) => {
    const url = '/checkin';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/checkin/${id}`;
    return axiosClient.get(url);
  },
}

export default checkin; 