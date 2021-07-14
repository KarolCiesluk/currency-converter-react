import { useState, useEffect } from "react";

export const useExchangeRateAPI = () => {
  const requestURL = 'https://api.exchangerate.host/latest';
  const [exchangeRateAPI, setExchangeRateAPI] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await fetch(requestURL);

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const rates = await response.json();
          setExchangeRateAPI(rates);
        } catch {
          setIsError(true);
        }
      })();
    }, 1000);
  }, []);

  return [exchangeRateAPI, isError];
};