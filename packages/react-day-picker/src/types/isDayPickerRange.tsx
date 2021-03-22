import { DayPickerProps } from './DayPickerProps';
import { DayPickerRange } from './DayPickerRange';

/** Returns true when the props are of type [[DayPickerRange]]. */
export function isDayPickerRange(
  props: DayPickerProps
): props is DayPickerRange {
  return props.mode === 'range';
}
