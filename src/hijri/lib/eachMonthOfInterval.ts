import { type Interval, toDate } from "date-fns";
import { toGregorianDate, toHijriDate } from "../utils/conversion.js";

export function eachMonthOfInterval(interval: Interval): Date[] {
  const start = toDate(interval.start);
  const end = toDate(interval.end);

  if (end.getTime() < start.getTime()) {
    throw new RangeError("Invalid interval");
  }

  const startDate = toHijriDate(start);
  const endDate = toHijriDate(end);

  const months: Date[] = [];

  let currentYear = startDate.year;
  let currentMonth = startDate.monthIndex;

  const endYear = endDate.year;
  const endMonth = endDate.monthIndex;

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    months.push(
      toGregorianDate({ year: currentYear, monthIndex: currentMonth, day: 1 }),
    );

    currentMonth += 1;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear += 1;
    }
  }

  return months;
}
