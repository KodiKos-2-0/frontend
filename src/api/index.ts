import { LOCAL_STORAGE } from "@/constants/storage";
import type { Document, Nullable, User } from "@/lib/types";
import type { InsertableDocument } from "@/lib/types/document";
import type {
  InsertableOrganization,
  Organization,
} from "@/lib/types/organization";
import { buildFormData } from "@/utils/form-data";
import { axiosInstance } from "./axios";

type FetchDocumentsRequestConfig = {
  search?: string;
};

type FetchDocumentsResponseData = {
  count: number;
  next: Nullable<number>;
  prev: Nullable<number>;
  all: number[];
  results: Document[];
};

type FetchSearchedDocumentsResponseData = {
  docs: Document[];
};

type FetchDocumentResponseData = Document & {};

type LoginResponseData = {
  token: string;
};

type FetchUserProfileResponseData = User & {};

export const api = {
  documents: {
    fetch: async (config: FetchDocumentsRequestConfig) => {
      if (!config.search?.trim()) {
        const res = await axiosInstance.get<FetchDocumentsResponseData>(
          `/documents/`
        );
        return res.data.results;
      }

      const res = await axiosInstance.get<FetchSearchedDocumentsResponseData>(
        `/documents/search/`,
        {
          params: {
            q: config.search,
          },
        }
      );
      return res.data.docs;
    },

    fetchOne: async (id: number) => {
      const res = await axiosInstance.get<FetchDocumentResponseData>(
        `/documents/${id}/`
      );
      return res.data;
    },

    create: async (data: InsertableDocument) => {
      const form = buildFormData(data);

      const res = await axiosInstance.post<Document>(
        "/documents/post_document/",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data;
    },
  },

  organizations: {
    fetch: () => {
      return new Promise<Organization[]>((res) => {
        const organizations =
          localStorage.getItem(LOCAL_STORAGE.entities.organizations) || "[]";
        return res(JSON.parse(organizations));
      });
    },

    fetchOne: async (id: number) => {
      return new Promise((res) => {
        const organizations =
          localStorage.getItem(LOCAL_STORAGE.entities.organizations) || "[]";
        const data = JSON.parse(organizations) as Organization[];
        res(data.find((org) => org.id === id) || null);
      });
    },

    create: (data: InsertableOrganization) => {
      return new Promise<Organization>((res) => {
        const organizations =
          localStorage.getItem(LOCAL_STORAGE.entities.organizations) || "[]";
        const existingData = JSON.parse(organizations) as Organization[];

        const newOrganization: Organization = {
          id: Date.now(),
          name: data.name,
          description: data.description || "",
          member_count: 1,
          owner_id: data.owner_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        localStorage.setItem(
          LOCAL_STORAGE.entities.organizations,
          JSON.stringify([...existingData, newOrganization])
        );

        return res(newOrganization);
      });
    },
  },

  auth: {
    login: async (username: string, password: string) => {
      const res = await axiosInstance.post<LoginResponseData>("token/", {
        username,
        password,
      });
      return res.data;
    },

    fetch: async () => {
      const res = await axiosInstance.get<FetchUserProfileResponseData>(
        "profile/"
      );
      return res.data;
    },
  },
};
