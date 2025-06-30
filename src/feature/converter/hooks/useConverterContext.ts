import { useContext } from "react";
import { ConverterContext } from "../ConverterContext.tsx";

export const useConverterContext = () => {
  const context = useContext(ConverterContext);
  if (!context) {
    throw new Error(
      "useConverterContext must be used within ConverterProvider",
    );
  }
  return context;
};
