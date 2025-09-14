/**
 * Checks if a given Ethiopic year is a leap year.
 *
 * @param year - The Ethiopic year.
 * @returns True if the year is a leap year; otherwise, false.
 */

export function isEthiopicLeapYear(year: number): boolean {
  return year % 4 === 3;
}
