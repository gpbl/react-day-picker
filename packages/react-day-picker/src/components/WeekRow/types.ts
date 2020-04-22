import * as dateFns from 'date-fns';

import { DayPickerProps } from '../DayPicker';

/**
 * @private
 */
export interface WeekRowProps {
  weekNumber: number;
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
