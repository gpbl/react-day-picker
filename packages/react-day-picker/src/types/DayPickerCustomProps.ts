import { DayPickerProps } from '.';

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
