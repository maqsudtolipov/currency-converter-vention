import { useState } from "react";
import Input from "../Input.tsx";
import styles from "./ConvertInput.module.scss";
import { useConverterContext } from "../../../feature/converter/hooks/useConverterContext.ts";

const validateInput = (value: string) => {
  if (value.trim() === "") return "Value is required";
  if (!/^\d+(\.\d+)?$/.test(value)) return "Please enter a valid amount";
  if (Number(value) < 0) return "Please enter a valid amount";
  else return null;
};

const ConverterInput = () => {
  const context = useConverterContext();

  const { setInput: setContextInput, input: contextInput } = context;

  const [input, setInput] = useState<string>(() => contextInput.toString());
  const [error, setError] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);

    // Validate input
    const validationError = validateInput(value);
    if (validationError) return setError(validationError);

    setError("");
    setContextInput(Number(value));
  };

  return (
    <div className={styles.converterInput}>
      <Input input={input} setInput={handleInputChange} />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default ConverterInput;
