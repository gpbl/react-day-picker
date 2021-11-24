import { DayPickerProps } from '.';

/**
 * The props for the [[DayPicker]] component when using custom selection mode.
 */
export interface DayPickerCustomProps extends DayPickerProps {
  mode: 'custom';
  selected?: unknown;
  onSelect?: (...args: unknown[]) => unknown;
}
