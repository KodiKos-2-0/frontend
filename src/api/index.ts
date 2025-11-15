import type { Document, Nullable, User } from "@/lib/types";
import { buildQueryString } from "@/utils";
import { axiosInstance } from "./axios";

type FetchDocumentsRequestConfig = {
  page?: number;
  search?: string;
};

type FetchDocumentsResponseData = {
  count: number;
  next: Nullable<number>;
  prev: Nullable<number>;
  all: number[];
  results: Document[];
};

type LoginResponseData = {
  token: string;
};

type FetchUserProfileResponseData = User & {};

export const api = {
  fetchDocuments: async (config: FetchDocumentsRequestConfig) => {
    const query = buildQueryString(config);
    const res = await axiosInstance.get<FetchDocumentsResponseData>(
      `/documents/${query.length === 0 ? "" : "?"}${query}`
    );
    return res.data;
  },

  fetchDocument: async (id: number) => {
    const res = await axiosInstance.get<FetchDocumentsResponseData>(
      `/documents/${id}`
    );
    return res.data;
  },

  login: async (username: string, password: string) => {
    const res = await axiosInstance.post<LoginResponseData>("/api/token", {
      username,
      password,
    });
    return res.data;
  },

  fetchUser: async () => {
    const res = await axiosInstance.post<FetchUserProfileResponseData>(
      "/api/profile"
    );
    return res.data;
  },
};
