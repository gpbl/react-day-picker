import { toHijriDate } from "../utils/calendar.js";

export function getYear(date: Date, timeZone?: string): number {
  return toHijriDate(date, timeZone).year;
}
