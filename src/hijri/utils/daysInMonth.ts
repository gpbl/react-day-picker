import { toGregorianDate } from "./conversion.js";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function getDaysInMonth(year: number, monthIndex: number): number {
  // To get days in month, find difference between start of next month and start of this month.
  // Note: monthIndex can be 12 (for next year's first month calculation).
  // We handle overflow in toGregorianDate logic if needed, but toGregorianDate wrapper takes monthIndex.
  // We need to handle year rollover if monthIndex >= 12.

  let nextMonthYear = year;
  let nextMonthIndex = monthIndex + 1;
  if (nextMonthIndex > 11) {
    nextMonthYear += Math.floor(nextMonthIndex / 12);
    nextMonthIndex = nextMonthIndex % 12;
  }

  const startCurrent = toGregorianDate({ year, monthIndex, day: 1 });
  const startNext = toGregorianDate({
    year: nextMonthYear,
    monthIndex: nextMonthIndex,
    day: 1,
  });

  return Math.round(
    (startNext.getTime() - startCurrent.getTime()) / MS_PER_DAY,
  );
}
