/**
 * The props for the [[DayPicker]] component when using `mode="custom"`.
 */
export interface DayPickerCustomProps extends DayPickerProps {
  mode: 'custom';
  /** The selected day(s). */
  selected?: unknown;
  /** Use `onDayClick` and related event instead. */
  onSelect: never;
}

import { DayPickerProps } from './DayPickerProps';

/** Returns true when the props are of type [[DayPickerCustom]]. */
export function isDayPickerCustom(
  props: DayPickerProps
): props is DayPickerCustomProps {
  return props.mode === 'custom';
}
