import { addDays, endOfMonth, startOfMonth } from 'date-fns';

import { getModifierStatus } from 'hooks/useDayModifiers/utils/getModifierStatus';
import { Modifiers } from 'types/Modifiers';

export function getInitialTargetFocusedDay(
  displayMonths: Date[],
  modifiersContext: Modifiers
) {
  const firstDayInMonth = startOfMonth(displayMonths[0]);
  const lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);

  let firstEnabledDay = undefined;
  let today = undefined;
  let date = firstDayInMonth;
  while (date <= lastDayInMonth) {
    const modifiers = getModifierStatus(date, modifiersContext);
    if (modifiers.disabled || modifiers.hidden) {
      date = addDays(date, 1);
      continue;
    }
    if (modifiers.selected) {
      return date;
    }
    if (modifiers.today && !today) {
      today = date;
    }
    if (!firstEnabledDay) {
      firstEnabledDay = date;
    }
    date = addDays(date, 1);
  }
  if (today) {
    return today;
  } else {
    return firstEnabledDay;
  }
}
