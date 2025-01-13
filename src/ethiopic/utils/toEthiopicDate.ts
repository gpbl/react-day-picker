import { EthiopicDate } from "./EthiopicDate.js";

// TODO: remove. should use date-fns
function isGregorianLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// TODO: remove. should use date-fns
function daysInGregorianMonth(index: number, year: number): number {
  switch (index) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31;

    case 2: // February
      return isGregorianLeapYear(year) ? 29 : 28;
  }
  return 30; // April, June, September, November
}

// TODO: remove. should use date-fns
function addGregorianMonths(m: number, y: number): number {
  let sum = 0;
  for (let i = 1; i < m; i++) {
    sum += daysInGregorianMonth(i, y);
  }
  return sum;
}

// TODO: remove. should use date-fns
function getDayNoGregorian(date: Date): number {
  if (!(date instanceof Date)) {
    return 0;
  }
  const years = date.getFullYear() - 1;
  const leap_years =
    Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400);
  const non_leap_years = years - leap_years;
  const days_in_previous_years = leap_years * 366 + non_leap_years * 365;
  const days_in_current_year =
    addGregorianMonths(date.getMonth() + 1, date.getFullYear()) +
    date.getDate();
  return days_in_previous_years + days_in_current_year;
}

function createEthiopicDate(dn: number): EthiopicDate {
  const num = Math.floor(dn / 1461);
  const num2 = dn % 1461;
  const num3 = Math.floor(num2 / 365);
  const num4 = num2 % 365;
  if (num2 !== 1460) {
    return {
      year: num * 4 + num3,
      month: Math.floor(num4 / 30) + 1,
      day: (num4 % 30) + 1
    };
  } else {
    return {
      year: num * 4 + num3 - 1,
      month: 13,
      day: 6
    };
  }
}
/**
 * Converts a Gregorian date to an Ethiopic date.
 *
 * @param gregorianDate - A JavaScript Date object representing the Gregorian
 *   date.
 * @returns An EthiopicDate object.
 */
export function toEthiopicDate(gregorianDate: Date): EthiopicDate {
  return createEthiopicDate(getDayNoGregorian(gregorianDate) - 2431);
}
