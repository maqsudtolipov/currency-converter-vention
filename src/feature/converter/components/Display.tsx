import styles from "./Display.module.scss";
import { ConverterContext } from "../ConverterContext.tsx";
import { useContext } from "react";

const Display = () => {
  const context = useContext(ConverterContext);
  if (!context) return null;

  const { input } = context;
  const rate = 1250;

  return (
    <div>
      <p className={styles.fromCurrency}>{input} Us Dollars =</p>
      <p className={styles.toCurrency}>{input * rate} Uzbekistani Sums</p>
      <div className={styles.prices}>
        <p>1 USD = {input * rate} UZS</p>
        <p>1 UZS = {rate / input} USD</p>
      </div>
    </div>
  );
};

export default Display;
