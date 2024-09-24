type Params = { [key: string]: string | null };

export function updateSearchParams(prev: URLSearchParams, records: Params) {
  const params = new URLSearchParams(prev);

  for (const [key, value] of Object.entries(records)) {
    params.delete(key);

    if (value) {
      params.append(key, value);
    }
  }

  return params;
}
