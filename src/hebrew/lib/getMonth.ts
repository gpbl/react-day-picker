import { toHebrewDate } from "../utils/dateConversion.js";

export function getMonth(date: Date): number {
  return toHebrewDate(date).monthIndex;
}
