export const totalCoins = (updatedCounts) => {
  var result = Object.keys(updatedCounts).reduce((acc, k) => {
    const value = updatedCounts[k];
    if (value > 0) {
      const multiplier = multipliers[k];
      acc += value * multiplier;
    }
    return acc;
  }, 0);

  return result / 100;
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const multipliers = {
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1,
};
