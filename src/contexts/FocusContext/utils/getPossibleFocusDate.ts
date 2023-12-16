import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfISOWeek,
  endOfWeek,
  max,
  min,
  startOfISOWeek,
  startOfWeek
} from 'date-fns';

import type { Mode } from '../../../types';
import type { DayPickerContext } from '../../DayPickerContext';
import type { MoveFocusBy, MoveFocusDir } from '../FocusContext';

export type Options = Pick<
  DayPickerContext<Mode>,
  'modifiers' | 'locale' | 'ISOWeek' | 'weekStartsOn' | 'fromDate' | 'toDate'
>;

/** Return the next date that should be focused. */
export function getPossibleFocusDate(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  focusedDate: Date,
  options: Options
): Date {
  const { weekStartsOn, fromDate, toDate, locale, ISOWeek } = options;

  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) =>
      ISOWeek
        ? startOfISOWeek(date)
        : startOfWeek(date, { locale, weekStartsOn }),
    endOfWeek: (date: Date) =>
      ISOWeek ? endOfISOWeek(date) : endOfWeek(date, { locale, weekStartsOn })
  };

  let nextFocusedDate = moveFns[moveBy](
    focusedDate,
    moveDir === 'after' ? 1 : -1
  );
  if (moveDir === 'before' && fromDate) {
    nextFocusedDate = max([fromDate, nextFocusedDate]);
  } else if (moveDir === 'after' && toDate) {
    nextFocusedDate = min([toDate, nextFocusedDate]);
  }
  return nextFocusedDate;
}
