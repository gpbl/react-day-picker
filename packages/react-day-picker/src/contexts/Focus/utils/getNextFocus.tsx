import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import addYears from 'date-fns/addYears';
import endOfISOWeek from 'date-fns/endOfISOWeek';
import endOfWeek from 'date-fns/endOfWeek';
import max from 'date-fns/max';
import min from 'date-fns/min';
import startOfISOWeek from 'date-fns/startOfISOWeek';
import startOfWeek from 'date-fns/startOfWeek';

import { DayPickerContextValue } from 'contexts/DayPicker';
import { getActiveModifiers } from 'contexts/Modifiers';
import { Modifiers } from 'types/Modifiers';

export type MoveFocusBy =
  | 'day'
  | 'week'
  | 'startOfWeek'
  | 'endOfWeek'
  | 'month'
  | 'year';

export type MoveFocusDirection = 'after' | 'before';

export type MoveFocusOptions = Partial<
  Pick<
    DayPickerContextValue,
    'ISOWeek' | 'weekStartsOn' | 'fromDate' | 'toDate' | 'locale'
  >
>;
/** Return the next date to be focused. */
export function getNextFocus(
  /** The day that is focused. */
  focusedDay: Date,
  moveBy: MoveFocusBy,
  direction: MoveFocusDirection,
  options: MoveFocusOptions,
  modifiers?: Modifiers
): Date {
  const { weekStartsOn, fromDate, toDate, locale } = options;

  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) =>
      options.ISOWeek
        ? startOfISOWeek(date)
        : startOfWeek(date, { locale, weekStartsOn }),
    endOfWeek: (date: Date) =>
      options.ISOWeek
        ? endOfISOWeek(date)
        : endOfWeek(date, { locale, weekStartsOn })
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
  if (modifiers) {
    const activeModifiers = getActiveModifiers(newFocusedDay, modifiers);
    const isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;

    if (!isFocusable) {
      return getNextFocus(newFocusedDay, moveBy, direction, options, modifiers);
    }
  }

  return newFocusedDay;
}
