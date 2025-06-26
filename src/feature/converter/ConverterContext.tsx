import { createContext, type ReactNode, useState } from "react";

interface CurrencyRates {
  [currencyCode: string]: number;
}

interface ConverterContext {
  input: number;
  fromCurrency: string;
  toCurrency: string;
  currencyRates: CurrencyRates | null;
  setInput: (input: number) => void;
  setCurrencyRates: (input: CurrencyRates) => void;
  setFromCurrency: (fromCurrency: string) => void;
  setToCurrency: (toCurrency: string) => void;
  updatedDate: number;
  switchCurrency: () => void;
}

export const ConverterContext = createContext<ConverterContext | null>(null);

const ConverterContextProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState<number>(4000);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("UZS");
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates | null>(
    null,
  );

  const switchCurrency = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
  };

  return (
    <ConverterContext.Provider
      value={{
        input,
        fromCurrency,
        toCurrency,
        currencyRates,
        setInput,
        setCurrencyRates,
        setFromCurrency,
        setToCurrency,
        switchCurrency,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContextProvider;
