import styles from "./Input.module.scss";

interface InputProps {
  input: string;
  setInput: (input: string) => void;
}

const Input = ({ input, setInput }: InputProps) => {
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
          min={0}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
