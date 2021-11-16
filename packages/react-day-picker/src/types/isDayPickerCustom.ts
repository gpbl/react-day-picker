import { DayPickerProps } from './DayPickerProps';
import { DayPickerCustom } from './DayPickerCustom';

/** Returns true when the props are of type [[DayPickerCustom]]. */
export function isDayPickerCustom(
  props: DayPickerProps
): props is DayPickerCustom {
  return props.mode === 'custom';
}
