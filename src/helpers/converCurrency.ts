const convertCurrency = (amount: number, rateA: number, rateB: number) => {
  return amount * (rateA / rateB);
};

export default convertCurrency;
