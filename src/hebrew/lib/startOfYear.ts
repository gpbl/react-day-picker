import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";

export const startOfYear = (date: Date): Date => {
  const hebrew = toHebrewDate(date);
  return toGregorianDate({ year: hebrew.year, monthIndex: 0, day: 1 });
};
