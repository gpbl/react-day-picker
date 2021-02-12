import { DayPickerProps } from 'types';

/**
 * The props of the [[Day]] component.
 */
export interface DayProps {
  day: Date;
  currentMonth: Date;
  dayPickerProps: DayPickerProps;
}
