import axiosClient from "./axiosClient";

const urlDir = '/banner-sliders';

const navbarAPI = {
  getAll: async (params?:any) => {
    const url = urlDir;
    return await axiosClient.get(url, params);
  },
};

export default navbarAPI;
