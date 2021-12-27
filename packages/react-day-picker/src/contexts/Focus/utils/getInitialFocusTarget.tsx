import { addDays, endOfMonth, startOfMonth } from 'date-fns';

import { getModifiersStatus } from 'hooks/useDayModifiers/utils/getModifiersStatus';
import { Modifiers, ModifierStatus } from 'types/Modifiers';

const isFocusable = (modifiers: ModifierStatus) =>
  !modifiers.disabled && !modifiers.hidden;

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

  while (date <= lastDayInMonth) {
    const modifiersStatus = getModifiersStatus(date, modifiers);
    if (!isFocusable(modifiersStatus)) {
      date = addDays(date, 1);
      continue;
    }
    if (modifiersStatus.selected) {
      return date;
    }
    if (modifiersStatus.today && !today) {
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
