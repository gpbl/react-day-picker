import { toHijriDate } from "../utils/conversion.js";

export function getMonth(date: Date): number {
  return toHijriDate(date).monthIndex;
}
