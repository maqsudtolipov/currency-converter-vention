import styles from "./Display.module.scss";
import { ConverterContext } from "../ConverterContext.tsx";
import { useContext } from "react";
import convertCurrency from "../../../helpers/convertCurrency.ts";
import dropdownCurrencies from "../../../data/dropdownCurrencies.ts";

const Display = () => {
  const context = useContext(ConverterContext);
  if (!context) return null;

  const { input, currencyRates, fromCurrency, toCurrency } = context;

  if (!currencyRates) return <p>Currency rates not fetched</p>;

  return (
    <div>
      <p className={styles.fromCurrency}>
        {input}{" "}
        {dropdownCurrencies.find((item) => item.code === fromCurrency)?.name}s =
      </p>
      <p className={styles.toCurrency}>
        {convertCurrency(
          input,
          currencyRates[fromCurrency],
          currencyRates[toCurrency],
        )}{" "}
        {dropdownCurrencies.find((item) => item.code === toCurrency)?.name}s
      </p>
      <div className={styles.prices}>
        <p>
          1 {fromCurrency} ={" "}
          {convertCurrency(
            1,
            currencyRates[fromCurrency],
            currencyRates[toCurrency],
          )}{" "}
          {toCurrency}
        </p>
        <p>
          1 {toCurrency} ={" "}
          {convertCurrency(
            1,
            currencyRates[toCurrency],
            currencyRates[fromCurrency],
          )}{" "}
          {fromCurrency}
        </p>
      </div>
    </div>
  );
};

export default Display;
