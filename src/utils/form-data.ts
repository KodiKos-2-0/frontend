export function buildFormData(data: Record<string, any>): FormData {
  const form = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    // Files / Blobs
    if (value instanceof File || value instanceof Blob) {
      form.append(key, value);
      return;
    }

    // Dates → ISO string
    if (value instanceof Date) {
      form.append(key, value.toISOString());
      return;
    }

    // Arrays → append each value (common for tags)
    if (Array.isArray(value)) {
      value.forEach((item) => form.append(key, String(item)));
      return;
    }

    // Objects → serialize
    if (typeof value === "object") {
      form.append(key, JSON.stringify(value));
      return;
    }

    // Numbers / Booleans / Strings
    form.append(key, String(value));
  });

  return form;
}
