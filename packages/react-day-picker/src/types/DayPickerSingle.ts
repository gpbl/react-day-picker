import { SelectSingleEventHandler } from './SelectSingleEventHandler';

/**
 * The props for the [[DayPicker]] component when using single selection mode.
 */
export interface DayPickerSingle {
  mode?: 'single';
  /** The default selected day. */
  defaultSelected?: Date;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** When set, user cannot unselect days. */
  required?: boolean;
}
