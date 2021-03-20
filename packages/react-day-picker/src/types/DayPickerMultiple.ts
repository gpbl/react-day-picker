import { Matcher } from 'types';
import { DayPickerBase } from './DayPickerBase';
import { SelectMultipleEventHandler } from './SelectMultipleEventHandler';

/**
 * The props for the [[DayPicker]] component when using multiple selection mode.
 */
export interface DayPickerMultiple extends DayPickerBase {
  mode: 'multiple';
  /** The default selected dates. */
  defaultSelected?: Date[];
  /** Event fired when a days added or removed to the selection. */
  onSelect?: SelectMultipleEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
  /** The selected days. */
  selected?: Matcher | Matcher[];
}
