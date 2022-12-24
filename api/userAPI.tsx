import axiosClient from "./axiosClient";

const urlDir = '/accounts';

const userAPI = {
  create: async (params?:any) => {
    const url = urlDir;
    return await axiosClient.post(url, params);
  },
};

export default userAPI;
