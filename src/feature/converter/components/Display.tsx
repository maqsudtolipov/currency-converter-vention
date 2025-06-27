import styles from "./Display.module.scss";
import { ConverterContext } from "../ConverterContext.tsx";
import { useContext } from "react";
import convertCurrency from "../../../helpers/convertCurrency.ts";
import dropdownCurrencies from "../../../data/dropdownCurrencies.ts";
import localizeCurrency from "../../../helpers/localizeCurrency.ts";

const Display = () => {
  const context = useContext(ConverterContext);
  if (!context) return null;

  const { input, currencyRates, fromCurrency, toCurrency } = context;

  if (!currencyRates) return null;

  const selectedCurrency = dropdownCurrencies.find(
    (item) => item.code === toCurrency,
  );

  return (
    <div>
      <p className={styles.fromCurrency}>
        {input}{" "}
        {dropdownCurrencies.find((item) => item.code === fromCurrency)?.name}s =
      </p>
      <p className={styles.toCurrency}>
        {selectedCurrency
          ? `${localizeCurrency(
              convertCurrency(
                input,
                currencyRates[fromCurrency],
                currencyRates[toCurrency],
              ),
              selectedCurrency.locale,
              selectedCurrency.code,
            )} ${selectedCurrency.name}s`
          : null}
      </p>
      <div className={styles.prices}>
        <p>
          {`1 ${fromCurrency} = ${
            Math.floor(
              convertCurrency(
                1,
                currencyRates[fromCurrency],
                currencyRates[toCurrency],
              ) * 1e10,
            ) / 1e10
          } ${toCurrency}`}
        </p>
        <p>
          {`1 ${toCurrency} = ${
            Math.floor(
              convertCurrency(
                1,
                currencyRates[toCurrency],
                currencyRates[fromCurrency],
              ) * 1e10,
            ) / 1e10
          } ${fromCurrency}`}
        </p>
      </div>
    </div>
  );
};

export default Display;
