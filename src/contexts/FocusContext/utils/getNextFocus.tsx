import { getPossibleFocusDate } from './getPossibleFocusDate';
import { DayPickerContext } from '../../DayPickerContext';
import { Mode } from '../../../types';
import { dateMatchModifiers } from '../../ModifiersContext/utils/dateMatchModifiers';
import type { MoveFocusBy, MoveFocusDir } from '../FocusContext';

export function getNextFocus(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  focusedDate: Date,
  dayPicker: Pick<
    DayPickerContext<Mode>,
    'disabled' | 'hidden' | 'fromDate' | 'toDate'
  >,
  attempt: number = 0
): Date | undefined {
  if (attempt > 365) {
    // Limit the recursion to 365 attempts
    return undefined;
  }

  const possibleFocusDate = getPossibleFocusDate(
    moveBy,
    moveDir,
    focusedDate,
    dayPicker
  );

  const isDisabled = Boolean(
    dayPicker.disabled &&
      dateMatchModifiers(possibleFocusDate, dayPicker.disabled)
  );

  const isHidden = Boolean(
    dayPicker.hidden && dateMatchModifiers(possibleFocusDate, dayPicker.hidden)
  );

  if (!isDisabled && !isHidden) {
    return possibleFocusDate;
  }

  // Recursively attempt to find the next focusable date
  return getNextFocus(
    moveBy,
    moveDir,
    possibleFocusDate,
    dayPicker,
    attempt + 1
  );
}
