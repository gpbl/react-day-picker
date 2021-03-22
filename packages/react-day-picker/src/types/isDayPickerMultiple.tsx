import { DayPickerMultiple } from './DayPickerMultiple';
import { DayPickerProps } from './DayPickerProps';

/** Returns true when the props are of type [[DayPickerMultiple]]. */
export function isDayPickerMultiple(
  props: DayPickerProps
): props is DayPickerMultiple {
  return props.mode === 'multiple';
}
