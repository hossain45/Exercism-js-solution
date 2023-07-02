
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  //return Math.floor(budget / ratePerHour * 8);
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;


  const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour);
  return Math.ceil(fullMonthPrice - discount * fullMonthPrice + remainingDays * dayRate(ratePerHour))
}
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullyDayRates = (numDays % 22) * dayRate(ratePerHour);
  const fullMonthPrice = Math.floor(numDays / 22) * 22 * dayRate(ratePerHour);
  const discountRates = fullMonthPrice - (discount * fullMonthPrice);
  return Math.ceil(fullyDayRates + discountRates);
}
