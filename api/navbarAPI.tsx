import axiosClient from "./axiosClient";

const urlDir = '/navbars?populate=*';

const navbarAPI = {
  getItemsLink: async (params?:any) => {
    const url = urlDir + '&filters[type][$eq]=link';
    return await axiosClient.get(url, params);
  },
  getItemsTool: async (params?:any) => {
    const url = urlDir + '&filters[type][$eq]=tool';
    return await axiosClient.get(url, params);
  },
};

export default navbarAPI;
