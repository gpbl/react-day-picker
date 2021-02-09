import { DayPickerProps } from '../../DayPicker';

export interface WeekRowProps {
  weekNumber: number;
  /* The month that is displaying the row */
  currentMonth: Date;
  week: Date[];
  dayPickerProps: DayPickerProps;
}
