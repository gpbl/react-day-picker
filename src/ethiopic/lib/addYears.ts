import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function addYears(date: Date, amount: number): Date {
  const etDate = toEthiopicDate(date);
  return toGregorianDate({
    ...etDate,
    year: etDate.year + amount
  });
}
