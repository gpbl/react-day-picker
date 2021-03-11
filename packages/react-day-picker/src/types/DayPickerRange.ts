import { DateRange } from './DateRange';
import { DayPickerBase } from './DayPickerBase';
import { Matcher } from './Matcher';
import { SelectRangeEventHandler } from './SelectRangeEventHandler';

/**
 * The props for the [[DayPicker]] component when using range selection mode.
 */
export interface DayPickerRange extends DayPickerBase {
  mode: 'range';
  /** The default selected range. */
  defaultSelected?: DateRange;
  /** Event fired when a range or a part of the range is selected. */
  onSelect?: SelectRangeEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
  /** The selected days. */
  selected?: Matcher | Matcher[];
}
