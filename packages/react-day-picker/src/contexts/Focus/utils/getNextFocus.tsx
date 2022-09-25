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

export type FocusDayPickerContext = Partial<
  Pick<
    DayPickerContextValue,
    'ISOWeek' | 'weekStartsOn' | 'fromDate' | 'toDate' | 'locale'
  >
>;

export type FocusDayOptions = {
  moveBy: MoveFocusBy;
  direction: MoveFocusDirection;
  context: FocusDayPickerContext;
  modifiers?: Modifiers;
  retry?: { count: number; lastFocused: Date };
};

const MAX_RETRY = 365;

/** Return the next date to be focused. */
export function getNextFocus(focusedDay: Date, options: FocusDayOptions): Date {
  const {
    moveBy,
    direction,
    context,
    modifiers,
    retry = { count: 0, lastFocused: focusedDay }
  } = options;
  const { weekStartsOn, fromDate, toDate, locale } = context;

  const moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: (date: Date) =>
      context.ISOWeek
        ? startOfISOWeek(date)
        : startOfWeek(date, { locale, weekStartsOn }),
    endOfWeek: (date: Date) =>
      context.ISOWeek
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
  let isFocusable = true;

  if (modifiers) {
    const activeModifiers = getActiveModifiers(newFocusedDay, modifiers);
    isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
  }
  if (isFocusable) {
    return newFocusedDay;
  } else {
    if (retry.count > MAX_RETRY) {
      return retry.lastFocused;
    }
    return getNextFocus(newFocusedDay, {
      moveBy,
      direction,
      context,
      modifiers,
      retry: {
        ...retry,
        count: retry.count + 1
      }
    });
  }
}
