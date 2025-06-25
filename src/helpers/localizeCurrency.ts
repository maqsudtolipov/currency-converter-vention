const localizeCurrency = (
  currency: "USD" | "EUR" | "UZS",
): Intl.NumberFormat => {
  const currencyCodes = {
    USD: "en-US",
    EUR: "en-IE",
    UZS: "uz-UZ",
  };

  return new Intl.NumberFormat(currencyCodes[currency], {
    style: "currency",
    currency,
  });
};

export default localizeCurrency;
