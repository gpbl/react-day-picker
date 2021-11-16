import { SelectSingleEventHandler } from './SelectSingleEventHandler';

/**
 * The props for the [[DayPicker]] component when using single selection mode.
 */
export interface DayPickerSingle {
  mode?: 'single';
  /** The selected day when using controlled behavior. */
  selected?: Date;
  /** The default selected day when using uncontrolled (not using selected). */
  defaultSelected?: Date;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** When set, user cannot unselect days. */
  required?: boolean;
}
