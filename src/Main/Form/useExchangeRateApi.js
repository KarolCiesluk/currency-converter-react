import { useState, useEffect } from "react";

export const useExchangeRateAPI = () => {
  const requestURL = 'https://api.exchangerate.host/latest';
  const [exchangeRateAPI, setExchangeRateAPI] = useState({});

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
          setExchangeRateAPI({error: true});
        }
      })();
    }, 1000);
  }, []);

  return exchangeRateAPI;
};