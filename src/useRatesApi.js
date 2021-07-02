import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
    date: null,
    rates: null,
  });

  useEffect(() => {
    const getApi = () => {
      const addressAPI = "https://api.exchangerate.host/latest";

      fetch(addressAPI)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          if (addressAPI !== "https://api.exchangerate.host/latest") {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then(({ date, rates }) =>
          setRatesData({
            date,
            rates,
          })
        )
        .catch(() => setRatesData({ state: "error" }));
    };
    setTimeout(getApi, 1000);
  }, []);
  return ratesData;
};
