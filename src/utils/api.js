import axios from "axios";
import * as constants from "./constants";

const axiosInstance = axios.create({
  baseURL: constants.api.apiUrl,
});

// axiosInstance.interceptors.request.use(config => {}, (err) => {});
// axiosInstance.interceptors.response.use(config => {}, (err) => {});

export default axiosInstance;
