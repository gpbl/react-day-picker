import { DayPickerProps } from '.';
import { SelectMultipleEventHandler } from './SelectMultipleEventHandler';

/**
 * The props for the [[DayPicker]] component when using `mode="multiple"`.
 */
export interface DayPickerMultipleProps extends DayPickerProps {
  mode: 'multiple';
  /** The selected days. */
  selected?: Date[];
  /** Event fired when a days added or removed to the selection. */
  onSelect?: SelectMultipleEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}
