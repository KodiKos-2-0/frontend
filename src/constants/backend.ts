export const BACKEND = {
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  document: {
    custom_fields: {
      keywords_field_id: 2,
    },
  },
} as const;
