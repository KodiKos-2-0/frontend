export function buildQueryString(config: Record<string, string | number>) {
  const params = new URLSearchParams();

  if (config.page !== undefined) params.append("page", String(config.page));
  if (config.query) params.append("query", config.query.toString());

  return params.toString();
}
