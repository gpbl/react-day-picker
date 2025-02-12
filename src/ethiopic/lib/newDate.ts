import { isLeapYearEt, toGreg } from "../utils/ethiopicDateUtils.js";

/**
 * Creates a new date from Ethiopian calendar values.
 *
 * @param year - The Ethiopian year
 * @param monthIndex - The Ethiopian month (0-based, where 0 = Meskerem and 12 =
 *   Pagume)
 * @param date - The Ethiopian day of the month
 * @returns A new gregorian date representing the Ethiopian date
 * @throws If month or day values are invalid
 */
export function newDate(year: number, monthIndex: number, date: number): Date {
  // Convert from 0-based month index to 1-based Ethiopian month
  const month = monthIndex + 1;

  //Month should be between 1 and 13
  if (month < 1 || month > 13) {
    throw new Error(
      "Month must be between 0 and 12 (1-13 in Ethiopian calendar)"
    );
  }
  //Day should be between 1 and 30
  if (date < 1 || date > 30) {
    throw new Error("Day must be between 1 and 30");
  }
  //Pagume(the 13th month) should be between 1 and 6
  if (month === 13 && date > 6) {
    throw new Error("Day must be between 1 and 6 in Pagume");
  }
  //Pagume(the 13th month) should be between 1 and 5 in leap year
  if (month === 13 && isLeapYearEt(year) && date > 5) {
    throw new Error(
      "Day must be between 1 and 5 in Pagume if it's not a leap year"
    );
  }
  return toGreg({
    Year: year,
    Month: month,
    Day: date
  });
}
