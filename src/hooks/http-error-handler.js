import { useState, useEffect } from "react";

const HttpErrorHandler = httpClient => {
  const [error, setError] = useState(null);

  const requestInterceptor = httpClient.interceptors.request.use(
    req => {
      setError(null);
      return req;
    },
    err => {
      setError(err);
    },
    []
  );

  const responseInterceptor = httpClient.interceptors.response.use(
    res => res,
    err => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(requestInterceptor);
      httpClient.interceptors.response.eject(responseInterceptor);
    };
  });

  const confirmError = () => {
    setError(null);
  };

  return [error, confirmError];
};

export default HttpErrorHandler;
