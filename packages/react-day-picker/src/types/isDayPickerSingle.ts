import { DayPickerProps } from './DayPickerProps';
import { DayPickerSingle } from './DayPickerSingle';

/** Returns true when the props are of type [[DayPickerSingle]]. */
export function isDayPickerSingle(
  props: DayPickerProps
): props is DayPickerSingle {
  return props.mode === 'single';
}
