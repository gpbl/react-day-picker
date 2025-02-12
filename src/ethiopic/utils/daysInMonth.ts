import { isEthiopicLeapYear } from "./isEthiopicLeapYear.js";

export function daysInMonth(month: number, year: number): number {
  if (month === 13) {
    return isEthiopicLeapYear(year) ? 6 : 5;
  }
  return 30;
}
