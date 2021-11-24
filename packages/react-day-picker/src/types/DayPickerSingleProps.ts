import { DayPickerProps } from './DayPickerProps';
import { SelectSingleEventHandler } from './SelectSingleEventHandler';

/**
 * The props for the [[DayPicker]] component when using single selection mode.
 */
export interface DayPickerSingleProps extends DayPickerProps {
  mode: 'single';
  /** The selected day when using controlled behavior. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** When set, user cannot unselect days. */
  required?: boolean;
}
