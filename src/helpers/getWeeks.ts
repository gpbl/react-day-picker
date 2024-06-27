import type { CalendarMonth, CalendarWeek } from "../classes/index.js"

/** Returns an array of calendar weeks from an array of calendar months. */
export function getWeeks(months: CalendarMonth[]) {
  const initialWeeks: CalendarWeek[] = [];
  return months.reduce((weeks, month) => {
    return [...weeks, ...month.weeks];
  }, initialWeeks);
}
