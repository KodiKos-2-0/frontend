export function buildQueryString(config: Record<string, string | number>) {
  const params = new URLSearchParams();
  params.append("query", config.search.toString());
  return params.toString();
}
