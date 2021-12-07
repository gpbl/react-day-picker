import { DayPickerProps } from './DayPicker';

/** The props for the [[DayPicker]] component when using `mode="custom"`. */
export interface DayPickerCustomProps extends DayPickerProps {
  mode: 'custom';
  /** Use `onDayClick` and related events instead. */
  onSelect: never;
}

/** Returns true when the props are of type [[DayPickerCustom]]. */
export function isDayPickerCustom(
  props: DayPickerProps
): props is DayPickerCustomProps {
  return props.mode === 'custom';
}
