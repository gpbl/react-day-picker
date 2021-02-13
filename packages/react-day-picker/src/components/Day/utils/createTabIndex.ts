import { isSameDay, isSameMonth } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from 'types';

export function createTabIndex(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): number | undefined {
  if (!modifiers.interactive) return;

  let tabIndex: number;
  if (props.focusedDay && isSameDay(day, props.focusedDay)) {
    tabIndex = 0;
  } else if (isSameDay(day, new Date())) {
    tabIndex = 0;
  } else if (
    !isSameDay(day, new Date()) &&
    !isSameMonth(day, new Date()) &&
    day.getDate() === 1
  ) {
    tabIndex = 0;
  } else {
    tabIndex = -1;
  }

  return tabIndex;
}
