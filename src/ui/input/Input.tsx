import styles from "./Input.module.scss";

interface InputProps {
  input: string;
  defaultValue: number;
  setInput: (input: string) => void;
}

const Input = ({ input, defaultValue, setInput }: InputProps) => {
  console.log(defaultValue);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="amount" className={styles.labelText}>
        Amount
      </label>

      <div className={styles.inputField}>
        <input
          type="text"
          id="amount"
          value={input}
          defaultValue={defaultValue}
          min={0}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
