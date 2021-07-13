import { useState, useEffect } from "react";

export const useExchangeRateAPI = () => {
    const requestURL = 'https://api.exchangerate.host/latest';
    const [ratesAPI, setRatesAPI] = useState();

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch(requestURL);

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const rates = await response.json();
                    setRatesAPI(rates);
                } catch {
                    setRatesAPI({
                        error: true,
                    });
                }
            })();
        }, 1000);
    }, []);

    return ratesAPI;
};