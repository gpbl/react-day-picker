import { CalendarDay } from '../../../classes/CalendarDay';
import { CalendarMonth } from '../../../classes/CalendarMonth';

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 */
export function getDays(dayPickerMonths: CalendarMonth[]) {
  const initialDays: CalendarDay[] = [];
  return dayPickerMonths.reduce((days, month) => {
    const initialDays: CalendarDay[] = [];
    const weekDays: CalendarDay[] = month.weeks.reduce((weekDays, week) => {
      return [...weekDays, ...week.days];
    }, initialDays);
    return [...days, ...weekDays];
  }, initialDays);
}
