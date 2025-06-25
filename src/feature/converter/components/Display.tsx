import styles from "./Display.module.scss";

const Display = () => {
  return (
    <div>
      <p className={styles.fromCurrency}>4000 Us Dollars =</p>
      <p className={styles.toCurrency}>49,878,847.08 Uzbekistani Sums</p>
      <div className={styles.prices}>
        <p>1 USD = 12,469.7 UZS</p>
        <p>1 UZS = 0.0000801943 USD</p>
      </div>
    </div>
  );
};

export default Display;
