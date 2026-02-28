import { type Interval, toDate } from "date-fns";
import { toGregorianDate, toHijriDate } from "../utils/conversion.js";

export function eachYearOfInterval(interval: Interval): Date[] {
  const start = toDate(interval.start);
  const end = toDate(interval.end);

  if (end.getTime() < start.getTime()) {
    return [];
  }

  const startYear = toHijriDate(start).year;
  const endYear = toHijriDate(end).year;

  const years: Date[] = [];
  for (let year = startYear; year <= endYear; year += 1) {
    years.push(toGregorianDate({ year, monthIndex: 0, day: 1 }));
  }
  return years;
}
