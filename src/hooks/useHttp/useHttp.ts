import { useState, useCallback } from "react";

export const useHttp = (defaultHeaders = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (url: string, body = null, headers = {}) => {
      setLoading(true);
      setError(null);

      const mergedHeaders = { ...defaultHeaders, ...headers };

      try {
        const response = await fetch(url, {
          method: body ? "POST" : "GET",
          headers: {
            "Content-Type": "application/json",
            ...mergedHeaders,
          },
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        setLoading(false);
        return data;
      } catch (err) {
        setError(err.message);
        setLoading(false);
        throw err;
      }
    },
    [defaultHeaders]
  );

  return {
    loading,
    error,
    sendRequest,
  };
};
