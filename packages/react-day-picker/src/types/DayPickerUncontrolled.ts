import { DayPickerBase } from './DayPickerBase';
import { Matcher } from './Matcher';

/**
 * The props for the [[DayPicker]] component when using uncontrolled selection mode.
 */
export interface DayPickerUncontrolled extends DayPickerBase {
  mode: 'uncontrolled';
  /** The selected days. */
  selected?: Matcher | Matcher[];
}
