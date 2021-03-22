import { DayPickerProps } from './DayPickerProps';
import { DayPickerUncontrolled } from './DayPickerUncontrolled';

/** Returns true when the props are of type [[DayPickerUncontrolled]]. */
export function isDayPickerUncontrolled(
  props: DayPickerProps
): props is DayPickerUncontrolled {
  return props.mode === 'uncontrolled';
}
