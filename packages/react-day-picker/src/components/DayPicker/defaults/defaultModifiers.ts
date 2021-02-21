/* 

The default modifiers matchers assigned to every day. These values are passed to
the `defaultModifiers` prop in DayPicker.tsx.

*/

import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';

import { ModifiersMatchers } from '../../../types';
import { DayPickerContextValue } from '../../../types/DayPickerContextValue';

/** Determines if a day is outside the displayed month.  */
function isOutside(day: Date, displayMonth: Date): boolean {
  return !isSameMonth(day, displayMonth);
}

/** Determines if a day, when displayed in a month, is interactive.  */
function isInteractive(
  day: Date,
  displayMonth: Date,
  props: DayPickerContextValue
): boolean {
  const { toDate, fromDate, enableOutsideDaysClick, originalProps } = props;
  const outside = isOutside(day, displayMonth);
  if (props.mode !== 'uncontrolled' && !outside) {
    return true;
  }
  const hasInteractiveProps = 'onDayClick' in originalProps;
  if (props.mode !== 'uncontrolled') {
    return true;
  } else if (hasInteractiveProps) {
    return true;
  }
  // The day is NOT interactive if not in the range specified in the `fromDate`
  // and `toDate` (these values are set also by `fromDay/toDay` and
  // `fromYear/toYear` in the main component.)
  const isAfterToDate = Boolean(toDate && isAfter(day, toDate));
  const isBeforeFromDate = Boolean(fromDate && isBefore(day, fromDate));
  const isOutsideInteractive = outside
    ? Boolean(enableOutsideDaysClick)
    : false;

  const interactive =
    !isAfterToDate && !isBeforeFromDate && isOutsideInteractive;
  return interactive;
}

/** Determines if a day is "today". */
function isToday(day: Date, _: Date, props: DayPickerContextValue): boolean {
  // User can change the "today" date from props, thus we cannot rely to the
  // date now. The today props defaults to `new Date()` anyway...
  return isSameDay(day, props.today);
}

export const defaultModifiers: ModifiersMatchers = {
  interactive: isInteractive,
  outside: isOutside,
  today: isToday
};
