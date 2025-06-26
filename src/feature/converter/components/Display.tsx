import styles from "./Display.module.scss";
import { ConverterContext } from "../ConverterContext.tsx";
import { useContext } from "react";
import convertCurrency from "../../../helpers/convertCurrency.ts";

const Display = () => {
  const context = useContext(ConverterContext);
  if (!context) return null;

  const { input, currencyRates, fromCurrency, toCurrency } = context;
  const rate = 1250;
  console.log("currency rates", currencyRates);

  if (!currencyRates) return <p>Currency rates not fetched</p>;

  return (
    <div>
      <p className={styles.fromCurrency}>{input} Us Dollars =</p>
      <p className={styles.toCurrency}>
        {convertCurrency(
          input,
          currencyRates[fromCurrency],
          currencyRates[toCurrency],
        )}
        Uzbekistani Sums
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
