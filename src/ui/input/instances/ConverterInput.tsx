import { useContext, useState } from "react";
import { ConverterContext } from "../../../feature/converter/ConverterContext.tsx";
import Input from "../Input.tsx";
import styles from "./ConvertInput.module.scss";

const ConverterInput = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState("");

  const context = useContext(ConverterContext);
  if (!context)
    throw new Error("ConverterInput must be used inside the ConverterContext");

  const { setInput: setContextInput } = context;

  const validate = (value: string) => {
    setInput(value);

    if (value.trim() === "") {
      setError("Value is required");
      return;
    }

    if (!/^\d+(\.\d+)?$/.test(value)) {
      setError("Please enter a valid amount");
      return;
    }

    const number = Number(value);
    if (isNaN(number) || number < 0) {
      setError("Please enter a valid amount");
    }

    setError("");
    setContextInput(number);
  };

  return (
    <div className={styles.container}>
      <Input input={input} setInput={validate} />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default ConverterInput;
