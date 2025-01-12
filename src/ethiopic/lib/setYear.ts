import { ethiopianMonthLength } from "../utils/ethiopicDateUtils.js";
import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function setYear(date: Date, year: number): Date {
  const etDate = toEthiopicDate(date);

  // Check if the day is valid in the new year (handles leap year changes)
  const maxDays = ethiopianMonthLength(etDate.month, year);
  const newDay = Math.min(etDate.day, maxDays);

  return toGregorianDate({
    ...etDate,
    year: year,
    day: newDay
  });
}
