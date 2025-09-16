import { toGregorianDate } from "../utils/calendar.js";

export function newDate(
  year: number,
  monthIndex: number,
  day: number,
  timeZone?: string,
): Date {
  return toGregorianDate({ year, monthIndex, day }, timeZone);
}
