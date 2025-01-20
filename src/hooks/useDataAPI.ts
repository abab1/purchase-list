import { useEffect, useState } from 'react';

export const useDataApi = (
  initUrl: string,
  deafultData: Array<Record<string, any>>,
  transformFn: (data: Array<Record<string, any>>) => Array<Record<string, any>>
) => {
  const [data, setData] = useState(deafultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [url, _] = useState(initUrl);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData((transformFn && transformFn(data)) || data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return [{ data, loading, error }];
};
