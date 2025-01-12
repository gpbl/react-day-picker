import { toGregorianDate } from "../utils/toGregorianDate.js";

export function newDate(year: number, monthIndex: number, date: number): Date {
  // Convert from 0-based month index to 1-based Ethiopian month
  const month = monthIndex + 1;

  if (month < 1 || month > 13) {
    throw new Error(
      "Month must be between 0 and 12 (1-13 in Ethiopian calendar)"
    );
  }

  return toGregorianDate({
    year: year,
    month: month,
    day: date
  });
}
