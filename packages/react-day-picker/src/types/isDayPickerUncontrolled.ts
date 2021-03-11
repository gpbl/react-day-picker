import { DayPickerProps } from './DayPickerProps';
import { DayPickerUncontrolled } from './DayPickerUncontrolled';

/** Returns true when the props are of type [[DayPickerMultiple]]. */
export function isDayPickerUncontrolled(
  props: DayPickerProps
): props is DayPickerUncontrolled {
  return 'mode' in props && props.mode === 'uncontrolled';
}
