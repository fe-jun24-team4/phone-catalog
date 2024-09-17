import { useEffect, useState } from 'react';

export const useFetchData = <T>(url: string) => {
  const [data, setSata] = useState<T[]>([] as T[]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsError(false);
      const response = await fetch(url);

      const res = await response.json();

      setSata(res);
    } catch (error) {
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    fetchData,
    isError,
    data,
  };
};
