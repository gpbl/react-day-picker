import { DayPickerProps } from '.';
import { SelectMultipleEventHandler } from './SelectMultipleEventHandler';

/**
 * The props for the [[DayPicker]] component when using multiple selection mode.
 */
export interface DayPickerMultipleProps extends DayPickerProps {
  mode: 'multiple';
  /** The selected dates when using controlled behavior. */
  selected?: Date[];
  /** Event fired when a days added or removed to the selection. */
  onSelect?: SelectMultipleEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}
