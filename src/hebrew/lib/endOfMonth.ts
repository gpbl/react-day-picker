import { daysInHebrewMonth } from "../utils/calendarMath.js";
import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";

export const endOfMonth = (date: Date): Date => {
  const hebrew = toHebrewDate(date);
  const day = daysInHebrewMonth(hebrew.year, hebrew.monthIndex);
  return toGregorianDate({ ...hebrew, day });
};
