import { useContext, useState } from "react";
import { ConverterContext } from "../../../feature/converter/ConverterContext.tsx";
import Input from "../Input.tsx";

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
    <div>
      <Input input={input} setInput={validate} />
      <p style={{ color: "#b72f2f" }}>{error}</p>
    </div>
  );
};

export default ConverterInput;
