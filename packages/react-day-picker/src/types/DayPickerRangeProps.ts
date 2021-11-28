import { DayPickerProps } from './DayPickerProps';
import { DateRange } from './Matchers';
import { SelectRangeEventHandler } from './SelectRangeEventHandler';

/**
 * The props for the [[DayPicker]] component when using `mode="range"`.
 */
export interface DayPickerRangeProps extends DayPickerProps {
  mode: 'range';
  /** The selected range of days. */
  selected?: DateRange;
  /** Event fired when a range (or a part of the range) is selected. */
  onSelect?: SelectRangeEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}
