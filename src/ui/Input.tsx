import styles from "./Input.module.scss";

const Input = () => {
  const currency = "$";

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="amount" className={styles.labelText}>
        Amount:
      </label>

      <div className={styles.inputField}>
        {currency}
        <input type="text" id="amount" defaultValue={15} />
      </div>
    </div>
  );
};

export default Input;
