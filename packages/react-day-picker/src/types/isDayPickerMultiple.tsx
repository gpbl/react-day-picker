import { DayPickerMultipleProps } from './DayPickerMultipleProps';
import { DayPickerProps } from './DayPickerProps';

/** Returns true when the props are of type [[DayPickerMultiple]]. */
export function isDayPickerMultiple(
  props: DayPickerProps
): props is DayPickerMultipleProps {
  return props.mode === 'multiple';
}
