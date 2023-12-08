import { Month } from '../../../classes/Month';
import { Day } from '../../../classes/Day';

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 */
export function getDayPickerDays(dayPickerMonths: Month[]) {
  const initialDays: Day[] = [];
  return dayPickerMonths.reduce((days, month) => {
    const initialDays: Day[] = [];
    const weekDays: Day[] = month.weeks.reduce((weekDays, week) => {
      return [...weekDays, ...week.days];
    }, initialDays);
    return [...days, ...weekDays];
  }, initialDays);
}
