import { toHijriDate } from "../utils/conversion.js";

export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date,
): number {
  const hijriLeft = toHijriDate(dateLeft);
  const hijriRight = toHijriDate(dateRight);

  return (
    (hijriLeft.year - hijriRight.year) * 12 +
    (hijriLeft.monthIndex - hijriRight.monthIndex)
  );
}
