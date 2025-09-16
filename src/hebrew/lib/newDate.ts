import { toGregorianDate } from "../utils/dateConversion.js";

export function newDate(year: number, monthIndex: number, day: number): Date {
  return toGregorianDate({ year, monthIndex, day });
}
