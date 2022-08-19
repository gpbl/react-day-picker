import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import addYears from 'date-fns/addYears';
import endOfWeek from 'date-fns/endOfWeek';
import max from 'date-fns/max';
import min from 'date-fns/min';
import startOfWeek from 'date-fns/startOfWeek';

import { DayPickerContextValue } from 'contexts/DayPicker';

export type MoveFocusBy =
  | 'day'
  | 'week'
  | 'startOfWeek'
  | 'endOfWeek'
  | 'month'
  | 'year';

export type MoveFocusDirection = 'after' | 'before';

export type MoveFocusOptions = Partial<
  Pick<DayPickerContextValue, 'weekStartsOn' | 'fromDate' | 'toDate' | 'locale'>
>;
/** Return the next date to be focused. */
export function getNextFocus(
  /** The day that is focused. */
  focusedDay: Date,
  moveBy: MoveFocusBy,
  direction: MoveFocusDirection,
  options: MoveFocusOptions
): Date {
  const { weekStartsOn, fromDate, toDate, locale } = options;

  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) => startOfWeek(date, { locale, weekStartsOn }),
    endOfWeek: (date: Date) => endOfWeek(date, { locale, weekStartsOn })
  };

  let newFocusedDay = moveFns[moveBy](
    focusedDay,
    direction === 'after' ? 1 : -1
  );

  if (direction === 'before' && fromDate) {
    newFocusedDay = max([fromDate, newFocusedDay]);
  } else if (direction === 'after' && toDate) {
    newFocusedDay = min([toDate, newFocusedDay]);
  }

  return newFocusedDay;
}
