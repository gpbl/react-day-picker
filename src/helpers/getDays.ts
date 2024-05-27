import type { CalendarDay, CalendarMonth } from "../classes";

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 */
export function getDays(calendarMonths: CalendarMonth[]) {
  const initialDays: CalendarDay[] = [];
  return calendarMonths.reduce((days, month) => {
    const initialDays: CalendarDay[] = [];
    const weekDays: CalendarDay[] = month.weeks.reduce((weekDays, week) => {
      return [...weekDays, ...week.days];
    }, initialDays);
    return [...days, ...weekDays];
  }, initialDays);
}
