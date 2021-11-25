import { DayPickerProps } from './DayPickerProps';
import { DayPickerRangeProps } from './DayPickerRangeProps';

/** Returns true when the props are of type [[DayPickerRange]]. */
export function isDayPickerRange(
  props: DayPickerProps
): props is DayPickerRangeProps {
  return props.mode === 'range';
}
