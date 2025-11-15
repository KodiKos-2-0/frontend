import { LOCAL_STORAGE } from "@/constants/storage";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "localhost:3000/api",
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE.api.token);
  if (token === null) return config;
  config.headers.Authorization = `Token ${token}`;
  return config;
});
