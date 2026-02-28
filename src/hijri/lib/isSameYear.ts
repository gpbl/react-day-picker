import { toHijriDate } from "../utils/conversion.js";

export function isSameYear(dateLeft: Date, dateRight: Date): boolean {
  const hijriLeft = toHijriDate(dateLeft);
  const hijriRight = toHijriDate(dateRight);
  return hijriLeft.year === hijriRight.year;
}
