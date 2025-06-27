import styles from "./Converter.module.scss";
import FromDropdown from "../../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../../ui/dropdown/instances/ToDropdown.tsx";
import Display from "./components/Display.tsx";
import { ConverterContext } from "./ConverterContext.tsx";
import { useContext, useEffect, useState } from "react";
import ConverterSwitchBtn from "../../ui/switchBtn/instances/ConverterSwitchBtn.tsx";
import ConverterInput from "../../ui/input/instances/ConverterInput.tsx";

const Converter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const context = useContext(ConverterContext);
  if (!context) {
    throw new Error("Converter must be used within a ConverterProvider");
  }

  const { setCurrencyRates } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/a2b1eb34c3500f20de9a572/latest/USD",
        );
        const data = await res.json();
        const rates = {
          USD: 1,
          UZS: data.conversion_rates.UZS as number,
          EUR: data.conversion_rates.EUR as number,
          updatedDate: data.time_last_update_unix,
        };

        setCurrencyRates(rates);
        setError("");
      } catch (e) {
        setError("Failed to update rates");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setCurrencyRates]);

  return (
    <div className={styles.converter}>
      <div className={styles.inputField}>
        <ConverterInput />
        <FromDropdown />
        <ConverterSwitchBtn />
        <ToDropdown />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Display />
    </div>
  );
};

export default Converter;
