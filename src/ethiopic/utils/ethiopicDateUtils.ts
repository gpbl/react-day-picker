import { EthiopicDate } from "./EthiopicDate.js";
import { daysInMonth } from "./daysInMonth.js";
import { isEthiopicLeapYear } from "./isEthiopicLeapYear.js";
import { getDayNoEthiopian } from "./toGregorianDate.js";

// TODO: should use date-fns function instead
export function isGregorianLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// TODO: should use date-fns function instead
export function daysInGregorianMonth(index: number, year: number): number {
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
// TODO: This is not used anywhere, should it go to addYears.ts?
export function ethiopicDayDiff(
  date1: EthiopicDate,
  date2: EthiopicDate
): number {
  const day1 = getDayNoEthiopian(date1);
  const day2 = getDayNoEthiopian(date2);
  return day1 - day2;
}

function isValid(date: EthiopicDate): boolean {
  if (date.year < 1000 || date.year > 3000) return false;
  if (date.month < 1) return false;
  if (date.day < 1) return false;
  if (date.month > 13) return false;
  if (date.day > daysInMonth(date.month, date.year)) return false;
  return true;
}

// TODO: This is not used anywhere, should it go to addYears.ts?
export function addYears(etDate: EthiopicDate, years: number): EthiopicDate {
  if (!isValid(etDate))
    throw new Error(
      `Invalid ethiopian date ${etDate.day}-${etDate.month}-${etDate.year}`
    );

  const newYear = etDate.year + years;

  if (etDate.month === 13 && etDate.day === 6) {
    if (!isEthiopicLeapYear(newYear)) {
      return { day: 5, month: etDate.month, year: newYear };
    }
  }

  return { day: etDate.day, month: etDate.month, year: newYear };
}

// TODO: This is not used anywhere, should it go to getStartOfWeek.ts?
export function getStartOfEthiopianWeek(date: Date): Date {
  const dayOfWeek = date.getDay();
  // In Ethiopic calendar, Monday is 1 and Sunday is 0
  // Convert JavaScript's Sunday=0 to Ethiopic's Sunday=0
  const ethiopianDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Create a new date by subtracting the days to get to Monday
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - ethiopianDayOfWeek);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
