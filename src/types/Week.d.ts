import { DateWithModifiers } from '../classes/DateWithModifiers';
import { DayPickerProps } from './DayPicker';

export interface WeekProps {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}
