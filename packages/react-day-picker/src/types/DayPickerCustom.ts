import { DayPickerProps } from './DayPicker';
import { Matcher } from './Matchers';

/** The props for the [[DayPicker]] component when using `mode="custom"`. */
export interface DayPickerCustomProps extends DayPickerProps {
  mode: 'custom';
  /** The selected day(s). */
  selected?: Matcher | Matcher[];
  /** Use `onDayClick` and related event instead. */
  onSelect: never;
}

/** Returns true when the props are of type [[DayPickerCustom]]. */
export function isDayPickerCustom(
  props: DayPickerProps
): props is DayPickerCustomProps {
  return props.mode === 'custom';
}
