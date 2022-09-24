import addDays from 'date-fns/addDays';
import endOfMonth from 'date-fns/endOfMonth';
import startOfMonth from 'date-fns/startOfMonth';

import { getActiveModifiers } from 'contexts/Modifiers';
import { Modifiers } from 'types/Modifiers';

const MAX_RETRY = 365;

/** Returns the day that should be the target of the focus when DayPicker is rendered the first time. */
export function getInitialFocusTarget(
  displayMonths: Date[],
  modifiers: Modifiers
) {
  const firstDayInMonth = startOfMonth(displayMonths[0]);
  const lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);

  // TODO: cleanup code
  let firstFocusableDay;
  let today;
  let date = firstDayInMonth;
  let count = 0;
  while (date <= lastDayInMonth && count < MAX_RETRY) {
    count++;
    const activeModifiers = getActiveModifiers(date, modifiers);
    const isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
    if (!isFocusable) {
      date = addDays(date, 1);
      continue;
    }
    if (activeModifiers.selected) {
      return date;
    }
    if (activeModifiers.today && !today) {
      today = date;
    }
    if (!firstFocusableDay) {
      firstFocusableDay = date;
    }
    date = addDays(date, 1);
  }
  if (today) {
    return today;
  } else {
    return firstFocusableDay;
  }
}
