import { DayPickerProps } from './DayPickerProps';
import { SelectSingleEventHandler } from './SelectSingleEventHandler';

/**
 * The props for the [[DayPicker]] component when using `mode="single"`.
 */
export interface DayPickerSingleProps extends DayPickerProps {
  mode: 'single';
  /** The selected day. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: boolean;
}
