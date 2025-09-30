import type { Interval } from "date-fns";

import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * Returns the start of each Ethiopic year included in the given interval.
 *
 * @param interval The interval whose years should be returned.
 */
export function eachYearOfInterval(interval: Interval): Date[] {
  const start = toEthiopicDate(new Date(interval.start));
  const end = toEthiopicDate(new Date(interval.end));

  if (end.year < start.year) {
    return [];
  }

  const years: Date[] = [];
  for (let year = start.year; year <= end.year; year += 1) {
    years.push(toGregorianDate({ year, month: 1, day: 1 }));
  }
  return years;
}
