import { isEthiopicLeapYear } from "../utils/isEthiopicLeapYear.js";
import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function endOfYear(date: Date): Date {
  const etDate = toEthiopicDate(date);
  return toGregorianDate({
    year: etDate.year,
    month: 13,
    day: isEthiopicLeapYear(etDate.year) ? 6 : 5
  });
}
