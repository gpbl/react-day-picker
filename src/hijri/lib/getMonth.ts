import { toHijriDate } from "../utils/calendar.js";

export function getMonth(date: Date, timeZone?: string): number {
  return toHijriDate(date, timeZone).monthIndex;
}
