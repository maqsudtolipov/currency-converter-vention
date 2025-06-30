import { useContext, useState } from "react";
import { ConverterContext } from "../../../feature/converter/ConverterContext.tsx";
import Input from "../Input.tsx";
import styles from "./ConvertInput.module.scss";

const validateInput = (value: string) => {
  if (value.trim() === "") return "Value is required";
  if (!/^\d+(\.\d+)?$/.test(value)) return "Please enter a valid amount";
  if (Number(value) < 0) return "Please enter a valid amount";
  else return null;
};

const ConverterInput = () => {
  const context = useContext(ConverterContext);
  if (!context)
    throw new Error("ConverterInput must be used inside the ConverterContext");

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
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ConverterInput;
