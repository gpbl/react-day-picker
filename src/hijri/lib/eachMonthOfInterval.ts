import { toDate, type Interval } from "date-fns";

import {
  fromHijriCalendarDate,
  toHijriCalendarDate,
} from "../utils/calendar.js";

export function eachMonthOfInterval(
  interval: Interval,
  timeZone?: string,
): Date[] {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);
  const start = toHijriCalendarDate(startDate, timeZone);
  const end = toHijriCalendarDate(endDate, timeZone);
  if (end.compare(start) < 0) {
    return [];
  }
  const months: Date[] = [];
  let current = start;
  while (current.compare(end) <= 0) {
    months.push(fromHijriCalendarDate(current, timeZone));
    current = current.add({ months: 1 });
  }
  return months;
}
