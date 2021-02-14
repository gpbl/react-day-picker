import { isSameDay, isSameMonth } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from '../../../types';

export function createTabIndex(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): number | undefined {
  let tabIndex: number;
  if (props.focusedDay && isSameDay(day, props.focusedDay)) {
    tabIndex = 0;
  } else if (isSameMonth(day, props.month) && day.getDate() === 1) {
    tabIndex = 0;
  } else {
    tabIndex = -1;
  }
  return tabIndex;
}
