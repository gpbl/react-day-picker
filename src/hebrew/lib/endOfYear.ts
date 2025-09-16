import {
  daysInHebrewMonth,
  monthsInHebrewYear,
} from "../utils/calendarMath.js";
import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";

export const endOfYear = (date: Date): Date => {
  const hebrew = toHebrewDate(date);
  const lastMonth = monthsInHebrewYear(hebrew.year) - 1;
  const day = daysInHebrewMonth(hebrew.year, lastMonth);
  return toGregorianDate({ year: hebrew.year, monthIndex: lastMonth, day });
};
