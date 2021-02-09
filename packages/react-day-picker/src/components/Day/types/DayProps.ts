/**
 * The props of the [[Day]] component.
 */
import { DayPickerProps } from '../../DayPicker';

export interface DayProps {
  day: Date;
  currentMonth: Date;
  dayPickerProps: DayPickerProps;
}
