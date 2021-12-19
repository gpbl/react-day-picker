import { addDays, endOfMonth, startOfMonth } from 'date-fns';

import { getModifierStatus } from 'hooks/useDayModifiers/utils/getModifierStatus';
import { Modifiers, ModifierStatus } from 'types/Modifiers';

const isFocusable = (modifiers: ModifierStatus) =>
  !modifiers.disabled && !modifiers.hidden;

/**
 * Returns the day that should be the target of the focus when initially
 * rendered according to the following requirements:
 *  1. if there is a selected day, focus on the (first) selected day
 *  2. else if the display months include the current date (today) focus on the current date
 *  3. else focus on the first focusable day
 *  4. else there is nothing to focus on
 */
export function getInitialFocusTarget(
  displayMonths: Date[],
  modifiersContext: Modifiers
) {
  const firstDayInMonth = startOfMonth(displayMonths[0]);
  const lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);

  let firstFocusableDay;
  let today;
  let date = firstDayInMonth;

  while (date <= lastDayInMonth) {
    const modifiers = getModifierStatus(date, modifiersContext);
    if (!isFocusable(modifiers)) {
      date = addDays(date, 1);
      continue;
    }
    if (modifiers.selected) {
      return date;
    }
    if (modifiers.today && !today) {
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
