import {
  toEth,
  toGreg,
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";

export function setYear(date: Date, year: number): Date {
  const etDate = toEth(date);

  // Check if the day is valid in the new year (handles leap year changes)
  const maxDays = ethiopianMonthLength(etDate.Month, year);
  const newDay = Math.min(etDate.Day, maxDays);

  return toGreg({
    ...etDate,
    Year: year,
    Day: newDay
  });
}
