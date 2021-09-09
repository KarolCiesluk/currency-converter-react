import { useState, useEffect } from "react";

export const useExchangeRateAPI = () => {
  const requestURL = 'https://api.exchangerate.host/latest';
  const [ratesData, setRatesData] = useState({ status: "loading" });

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      (async () => {
        try {
          const response = await fetch(requestURL);

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const { rates, date } = await response.json();
          setRatesData({
            status: "success",
            rates,
            date,
          });
        } catch {
          setRatesData({ status: "error" });
        }
      })();
    }, 2_000);

    return () => clearTimeout(timeoutID);
  }, []);

  return ratesData;
};