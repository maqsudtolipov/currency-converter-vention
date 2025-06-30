import { useEffect, useState } from "react";
import { useConverterContext } from "../feature/converter/hooks/useConverterContext.ts";

const useCurrencyRates = () => {
  const context = useConverterContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const { currencyRates, updatedAt, setCurrencyRates, setUpdatedAt } = context;
  const dataExists = !!currencyRates;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/a2b1eb34c3500f20de9a5727/latest/USD`,
      );
      const data = await res.json();

      const rates = {
        USD: 1,
        UZS: data.conversion_rates.UZS as number,
        EUR: data.conversion_rates.EUR as number,
      };

      setCurrencyRates(rates);
      setUpdatedAt(data.time_last_update_utc);
      setError("");
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error";
      setError(`Failed to update rates: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    dataExists,
    isLoading,
    error,
    fetchData,
    updatedAt,
  };
};

export default useCurrencyRates;
