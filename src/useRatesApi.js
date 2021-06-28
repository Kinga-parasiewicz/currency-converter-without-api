import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getApi = () => {
      const currenciesApi = "https://api.exchangerate.host/latest";

      setTimeout(() => {
        fetch(currenciesApi)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response;
          })
          .then((response) => response.json())
          .then((response) =>
            setRatesData({
              date: response.date,
              rates: response.rates,
            })
          )
          .catch(setRatesData({ state: "error" }));
      });
    };
    setTimeout(getApi, 1000);
  }, []);
  return ratesData;
};
