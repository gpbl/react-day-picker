import { toHijriDate } from "../utils/conversion.js";

export function getYear(date: Date): number {
  return toHijriDate(date).year;
}
