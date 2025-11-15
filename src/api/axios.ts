import { LOCAL_STORAGE } from "@/constants/storage";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE.api.token);
  if (token === null) return config;
  config.headers.Authorization = `Token ${token}`;
  return config;
});
