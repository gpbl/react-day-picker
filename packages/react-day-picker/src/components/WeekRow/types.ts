import * as dateFns from 'date-fns';

import { DayPickerProps } from '../DayPicker';

/**
 * @private
 */
export interface WeekRowProps {
  weekNumber: number;
  /* The month that is displaying the row */
  currentMonth: Date;
  week: Date[];
  dayPickerProps: DayPickerProps;
}

/**
 * Format the weekday name.
 */
export type WeekdayNameFormatter = (
  day: Date,
  options?: { locale?: dateFns.Locale }
) => string;
