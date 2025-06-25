import styles from "./Input.module.scss";
import { ConverterContext } from "../../feature/converter/ConverterContext.tsx";
import { useContext } from "react";

const Input = () => {
  const context = useContext(ConverterContext);
  if (!context) return null;

  const { input, setInput } = context;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="amount" className={styles.labelText}>
        Amount
      </label>

      <div className={styles.inputField}>
        <input
          type="number"
          id="amount"
          value={input}
          min={0}
          onChange={(e) => setInput(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Input;
