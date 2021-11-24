import { DayPickerProps } from './DayPickerProps';
import { DayPickerSingleProps } from './DayPickerSingleProps';

/** Returns true when the props are of type [[DayPickerSingle]]. */
export function isDayPickerSingle(
  props: DayPickerProps
): props is DayPickerSingleProps {
  return props.mode === 'single';
}
