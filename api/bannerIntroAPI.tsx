import axiosClient from "./axiosClient";

const urlDir = '/banner-introduces';

const bannerIntroAPI = {
  getAll: async (params?:any) => {
    const url = urlDir;
    console.log(url)
    return await axiosClient.get(url, params);
  }
}

export default bannerIntroAPI;
