import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";

export function startOfMonth(date: Date): Date {
  const hebrew = toHebrewDate(date);
  return toGregorianDate({ ...hebrew, day: 1 });
}
