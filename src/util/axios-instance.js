/* eslint-disable */
import axios from "axios";

export const axiosAuth = axios.create({
  baseURL: "https://vetmedika-api.herokuapp.com/",
});

axiosAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("user");
  config.headers.Authorization = token ? `Bearer ${token.slice(1, -1)}` : "";
  return config;
});
