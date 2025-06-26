import styles from "./Converter.module.scss";
import FromDropdown from "../../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../../ui/dropdown/instances/ToDropdown.tsx";
import Display from "./components/Display.tsx";
import { ConverterContext } from "./ConverterContext.tsx";
import { useContext, useEffect } from "react";
import ConverterSwitchBtn from "../../ui/switchBtn/instances/ConverterSwitchBtn.tsx";
import ConverterInput from "../../ui/input/instances/ConverterInput.tsx";

const Converter = () => {
  const context = useContext(ConverterContext);
  if (!context) {
    throw new Error("Converter must be used within a ConverterProvider");
  }

  const { setCurrencyRates } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/a2b1eb34c3500f20de9a5727/latest/USD",
        );
        const data = await res.json();
        const rates = {
          USD: 1,
          UZS: data.conversion_rates.UZS as number,
          EUR: data.conversion_rates.EUR as number,
          updatedDate: data.time_last_update_unix,
        };
        setCurrencyRates(rates);
        console.log(rates);
      } catch (e) {
        console.log("Error fetching data:", e);
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
      <Display />
    </div>
  );
};

export default Converter;
