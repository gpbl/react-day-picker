import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

export function addYears(date: Date, amount: number): Date {
  const { year, month, day } = toEthiopicDate(date);
  return toGregorianDate({
    year: year + amount,
    month,
    day
  });
}
