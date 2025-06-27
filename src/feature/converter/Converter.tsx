import styles from "./Converter.module.scss";
import FromDropdown from "../../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../../ui/dropdown/instances/ToDropdown.tsx";
import ResultsBoard from "./components/ResultsBoard.tsx";
import { ConverterContext } from "./ConverterContext.tsx";
import { useContext, useEffect, useState } from "react";
import ConverterSwitchBtn from "../../ui/switchBtn/instances/ConverterSwitchBtn.tsx";
import ConverterInput from "../../ui/input/instances/ConverterInput.tsx";
import formatDate from "../../helpers/formatDate.ts";

const Converter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const context = useContext(ConverterContext);
  if (!context) {
    throw new Error("Converter must be used within a ConverterProvider");
  }

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
      setError("Failed to update rates");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.converter}>
      <div className={styles.inputField}>
        <ConverterInput />
        <FromDropdown />
        <ConverterSwitchBtn />
        <ToDropdown />
      </div>

      {dataExists && <ResultsBoard />}

      {/* Error handling when data does not exist */}
      {!dataExists && isLoading && <p>Loading rates...</p>}

      {!dataExists && !isLoading && error && (
        <p style={{ color: "#991b1b" }}>⛔️ Error: {error}</p>
      )}

      {/* Error handling if data exists */}
      <p style={{ fontSize: "14px", color: "#797979" }}>
        <span
          role="button"
          onClick={fetchData}
          style={{ color: "#1d4ed8", userSelect: "none" }}
        >
          Refetch
        </span>

        {dataExists && (
          <>
            {" – "}

            {isLoading && <span>Loading rates...</span>}

            {!isLoading && error && (
              <span style={{ color: "#991b1b" }}> – ⛔️ Error: {error}</span>
            )}

            {!isLoading && <span>Last updated {formatDate(updatedAt)}</span>}
          </>
        )}
      </p>
    </div>
  );
};

export default Converter;
