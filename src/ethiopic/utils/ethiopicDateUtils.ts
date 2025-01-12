import { EthiopicDate } from "./EthiopicDate.js";
import { isEthiopicLeapYear } from "./isEthiopicLeapYear.js";
import { toEthiopicDate } from "./toEthiopicDate.js";

export const ethMonths = [
  "መስከረም",
  "ጥቅምት",
  "ህዳር",
  "ታህሳስ",
  "ጥር",
  "የካቲት",
  "መጋቢት",
  "ሚያዚያ",
  "ግንቦት",
  "ሰኔ",
  "ሐምሌ",
  "ነሀሴ",
  "ጳጉሜ"
];

export const shortDays = ["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"];
export const longDays = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];

export function ethiopianMonthLength(m: number, y: number): number {
  if (m === 13) {
    return isEthiopicLeapYear(y) ? 6 : 5;
  }
  return 30;
}

function isLeapYearGr(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function getDayNoEthiopian(etDate: EthiopicDate): number {
  const num = Math.floor(etDate.year / 4);
  const num2 = etDate.year % 4;
  return num * 1461 + num2 * 365 + (etDate.month - 1) * 30 + etDate.day - 1;
}

function gregorianMonthLength(index: number, year: number): number {
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
      return isLeapYearGr(year) ? 29 : 28;
  }
  return 30; // April, June, September, November
}

export function getEtDayName(day: Date, short: boolean = true): string {
  const dayOfWeek = day.getDay();
  return short ? shortDays[dayOfWeek] : longDays[dayOfWeek];
}

export function gregorianDateFromDayNo(dayNum: number): Date {
  let year = 1,
    month = 1,
    day;

  const num400 = Math.floor(dayNum / 146097); // number of full 400-year periods
  dayNum %= 146097;
  if (dayNum === 0) {
    return new Date(400 * num400, 12 - 1, 31);
  }

  const num100 = Math.min(Math.floor(dayNum / 36524), 3); // number of full 100-year periods, but not more than 3
  dayNum -= num100 * 36524;
  if (dayNum === 0) {
    return new Date(400 * num400 + 100 * num100, 12 - 1, 31);
  }

  const num4 = Math.floor(dayNum / 1461); // number of full 4-year periods
  dayNum %= 1461;
  if (dayNum === 0) {
    return new Date(400 * num400 + 100 * num100 + 4 * num4, 12 - 1, 31);
  }

  const num1 = Math.min(Math.floor(dayNum / 365), 3); // number of full years, but not more than 3
  dayNum -= num1 * 365;
  if (dayNum === 0) {
    return new Date(400 * num400 + 100 * num100 + 4 * num4 + num1, 12 - 1, 31);
  }

  year += 400 * num400 + 100 * num100 + 4 * num4 + num1;

  while (dayNum > 0) {
    const daysInMonth = gregorianMonthLength(month, year);

    if (dayNum <= daysInMonth) {
      day = dayNum;
      break;
    }

    dayNum -= daysInMonth;
    month++;
  }

  // Remember in JavaScript Date object, months are 0-based.
  return new Date(year, month - 1, day);
}

export function createEthiopianDate(dn: number): EthiopicDate {
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

function addGregorianMonths(m: number, y: number): number {
  let sum = 0;
  for (let i = 1; i < m; i++) {
    sum += gregorianMonthLength(i, y);
  }
  return sum;
}

export function getDayNoGregorian(date: Date): number {
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

export function getEtMonthName(m: number): string {
  if (m > 0 && m <= 13) {
    return ethMonths[m - 1];
  }
  return "";
}

export function ethiopianDayDiff(
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
  if (date.day > ethiopianMonthLength(date.month, date.year)) return false;
  return true;
}

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

export function formatEthiopianDate(
  dateObj: Date | undefined,
  formatStr: string
): string {
  const etDate = dateObj ? toEthiopicDate(dateObj) : undefined;

  if (!etDate) return "";

  switch (formatStr) {
    case "LLLL yyyy":
    case "LLLL y":
      return `${getEtMonthName(etDate.month)} ${etDate.year}`;

    case "LLLL":
      return getEtMonthName(etDate.month);

    case "yyyy-MM-dd":
      return `${etDate.year}-${etDate.month
        .toString()
        .padStart(2, "0")}-${etDate.day.toString().padStart(2, "0")}`;

    case "yyyy-MM":
      return `${etDate.year}-${etDate.month.toString().padStart(2, "0")}`;

    case "d":
      return etDate.day.toString();
    case "PPP":
      return ` ${getEtMonthName(etDate.month)} ${etDate.day}, ${etDate.year}`;
    case "PPPP":
      if (!dateObj) return "";
      return `${getEtDayName(dateObj)}, ${getEtMonthName(etDate.month)} ${
        etDate.day
      }, ${etDate.year}`;

    case "cccc":
      return dateObj ? getEtDayName(dateObj, false) : "";
    case "cccccc":
      return dateObj ? getEtDayName(dateObj) : "";

    default:
      return `${etDate.day}/${etDate.month}/${etDate.year}`;
  }
}

export function getStartOfEthiopianWeek(date: Date): Date {
  const dayOfWeek = date.getDay();
  // In Ethiopian calendar, Monday is 1 and Sunday is 0
  // Convert JavaScript's Sunday=0 to Ethiopian's Sunday=0
  const ethiopianDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Create a new date by subtracting the days to get to Monday
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - ethiopianDayOfWeek);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
