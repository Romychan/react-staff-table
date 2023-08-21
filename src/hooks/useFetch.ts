import { useRef, useState, useEffect } from 'react';

interface Cache<T> {
  [url: string]: {
    data: T;
    headers: Headers;
  };
}

export const useFetch = <T>(url: string) => {
  const cache = useRef<Cache<T>>({});
  const [data, setData] = useState<T>();
  const [headers, setHeaders] = useState<Headers>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);

      if (cache.current[url]) {
        const cachedData = cache.current[url];

        setData(cachedData.data);
        setHeaders(cachedData.headers);
        setIsLoading(false);
      } else {
        const fetchingData = await fetch(url);
        const response = await fetchingData.json();

        cache.current[url] = { data: response, headers: fetchingData.headers };
        setHeaders(fetchingData.headers);
        setData(response);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, headers, isLoading };
};
