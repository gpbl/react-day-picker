import { getPossibleFocusDate } from './getPossibleFocusDate';
import { DayPickerContext } from '../../DayPickerContext';
import { Mode } from '../../../types';
import { dateMatchModifiers } from '../../ModifiersContext/utils/dateMatchModifiers';
import type { MoveFocusBy, MoveFocusDir } from '../FocusContext';

export type Options = Pick<
  DayPickerContext<Mode>,
  'modifiers' | 'locale' | 'ISOWeek' | 'weekStartsOn' | 'fromDate' | 'toDate'
>;

export function getNextFocus(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  /** The date that is currently focused. */
  focusedDate: Date,
  options: Pick<
    DayPickerContext<Mode>,
    | 'disabled'
    | 'hidden'
    | 'modifiers'
    | 'locale'
    | 'ISOWeek'
    | 'weekStartsOn'
    | 'fromDate'
    | 'toDate'
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
    options
  );

  const isDisabled = Boolean(
    options.disabled && dateMatchModifiers(possibleFocusDate, options.disabled)
  );

  const isHidden = Boolean(
    options.hidden && dateMatchModifiers(possibleFocusDate, options.hidden)
  );

  if (!isDisabled && !isHidden) {
    return possibleFocusDate;
  }

  // Recursively attempt to find the next focusable date
  return getNextFocus(moveBy, moveDir, possibleFocusDate, options, attempt + 1);
}
