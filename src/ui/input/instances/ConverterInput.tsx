import { useContext } from "react";
import { ConverterContext } from "../../../feature/converter/ConverterContext.tsx";
import Input from "../Input.tsx";

const ConverterInput = () => {
  const context = useContext(ConverterContext);
  if (!context)
    throw new Error("ConverterInput must be used inside the ConverterContext");

  const { input, setInput } = context;

  return <Input input={input} setInput={setInput} />;
};

export default ConverterInput;
