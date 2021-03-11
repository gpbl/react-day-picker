import { DayPickerBase } from './DayPickerBase';
import { Matcher } from './Matcher';
import { SelectSingleEventHandler } from './SelectSingleEventHandler';

/**
 * The props for the [[DayPicker]] component when using single selection mode.
 */
export interface DayPickerSingle extends DayPickerBase {
  mode: 'single';
  /** The default selected day. */
  defaultSelected?: Date;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** When set, user cannot unselect days. */
  required?: boolean;
  /** The selected days. */
  selected?: Matcher | Matcher[];
}
