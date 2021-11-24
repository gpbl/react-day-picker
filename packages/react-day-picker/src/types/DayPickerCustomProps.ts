import { DayPickerProps } from '.';

/**
 * The props for the [[DayPicker]] component when using `mode="custom"`.
 */
export interface DayPickerCustomProps extends DayPickerProps {
  mode: 'custom';
  /** The selected day(s). */
  selected?: unknown;
  /** Event fired when a day is selected. */
  onSelect?: (...args: unknown[]) => unknown;
}
