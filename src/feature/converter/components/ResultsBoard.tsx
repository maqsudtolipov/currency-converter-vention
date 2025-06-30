import styles from "./Display.module.scss";
import convertCurrency from "../../../helpers/convertCurrency.ts";
import dropdownCurrencies from "../../../data/dropdownCurrencies.ts";
import localizeCurrency from "../../../helpers/localizeCurrency.ts";
import { useConverterContext } from "../hooks/useConverterContext.ts";

const ResultsBoard = () => {
  const context = useConverterContext();

  const { input, currencyRates, fromCurrency, toCurrency } = context;

  if (!currencyRates) return null;

  const selectedCurrency = dropdownCurrencies.find(
    (item) => item.code === toCurrency,
  );

  if (!selectedCurrency) return null;

  const mainRate = `${localizeCurrency(
    convertCurrency(
      input,
      currencyRates[fromCurrency],
      currencyRates[toCurrency],
    ),
    selectedCurrency.locale,
    selectedCurrency.code,
  )} ${selectedCurrency.name}s`;
  const fromRate = `1 ${fromCurrency} = ${
    Math.floor(
      convertCurrency(
        1,
        currencyRates[fromCurrency],
        currencyRates[toCurrency],
      ) * 1e10,
    ) / 1e10
  } ${toCurrency}`;
  const toRate = `1 ${toCurrency} = ${
    Math.floor(
      convertCurrency(
        1,
        currencyRates[toCurrency],
        currencyRates[fromCurrency],
      ) * 1e10,
    ) / 1e10
  } ${fromCurrency}`;

  return (
    <div>
      <p className={styles.fromCurrency}>
        {input} {selectedCurrency.name}s =
      </p>
      <p className={styles.toCurrency}>{mainRate}</p>
      <div className={styles.prices}>
        <p>{fromRate}</p>
        <p>{toRate}</p>
      </div>
    </div>
  );
};

export default ResultsBoard;
