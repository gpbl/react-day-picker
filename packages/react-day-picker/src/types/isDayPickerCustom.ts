import { DayPickerProps } from './DayPickerProps';
import { DayPickerCustomProps } from './DayPickerCustomProps';

/** Returns true when the props are of type [[DayPickerCustom]]. */
export function isDayPickerCustom(
  props: DayPickerProps
): props is DayPickerCustomProps {
  return props.mode === 'custom';
}
