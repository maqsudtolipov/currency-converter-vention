const localizeCurrency = (
  number: number,
  locale: string,
  currency: string,
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  })
    .formatToParts(number)
    .filter(
      (part) =>
        part.type === "integer" ||
        part.type === "decimal" ||
        part.type === "fraction" ||
        part.type === "group",
    )
    .map((part) => part.value)
    .join("");
};

export default localizeCurrency;
