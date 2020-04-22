import { DayPickerProps } from '../DayPicker';
import * as DateFns from 'date-fns';

/**
 * Props for the [[WeekNumber]] component.
 */
export interface WeekNumberProps {
  number: number;
  days: Date[];
  dayPickerProps: DayPickerProps;
}

export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale: DateFns.Locale }
) => string;
