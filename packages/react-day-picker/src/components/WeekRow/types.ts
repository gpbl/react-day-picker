import * as dateFns from "date-fns";

import { DateWithModifiers } from "../../classes/DateWithModifiers";
import { DayPickerProps } from "../DayPicker";

/**
 * @private
 */
export interface WeekRowProps {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}

/**
 * Format the weekday name.
 */
export type WeekdayNameFormatter = (
  day: Date,
  options?: { locale?: dateFns.Locale }
) => string;
