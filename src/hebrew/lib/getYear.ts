import { toHebrewDate } from "../utils/dateConversion.js";

export function getYear(date: Date): number {
  return toHebrewDate(date).year;
}
