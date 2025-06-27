import { createContext, type ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage.ts";

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
  setUpdatedAt: (updatedAt: string) => void;
  updatedAt: string;
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
  const [updatedAt, setUpdatedAt] = useState<string>("");

  const { getItem, setItem } = useLocalStorage("userPresences");

  useEffect(() => {
    const storedPrefs = getItem("userPresences");

    if (storedPrefs) {
      setInput(storedPrefs.input ?? 4000);
      setFromCurrency(storedPrefs.fromCurrency ?? "USD");
      setToCurrency(storedPrefs.toCurrency ?? "UZS");
    }
  }, []);

  useEffect(() => {
    setItem({
      input,
      fromCurrency,
      toCurrency,
    });
  }, [input, fromCurrency, toCurrency, setItem]);

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
        updatedAt,
        setInput,
        setCurrencyRates,
        setFromCurrency,
        setToCurrency,
        switchCurrency,
        setUpdatedAt,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContextProvider;
