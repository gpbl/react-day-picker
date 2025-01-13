import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

export function addYears(date: Date, amount: number): Date {
  const { year, month, day } = toEthiopicDate(date);
  const newYear = year + amount;
  return toGregorianDate({ year: newYear, month, day });
}
