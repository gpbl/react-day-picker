import { DayPickerProps } from 'types';

export interface RowProps {
  weekNumber: number;
  /* The month that is displaying the row */
  currentMonth: Date;
  week: Date[];
  dayPickerProps: DayPickerProps;
}
