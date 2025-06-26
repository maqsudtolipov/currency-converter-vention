import styles from "./Input.module.scss";

interface InputProps {
  input: number;
  setInput: (input: number) => void;
}

const Input = ({ input, setInput }: InputProps) => {
  console.log(input);

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
