import * as dateFns from "date-fns";

import { DateWithModifiers } from "../../classes/DateWithModifiers";
import { DayPickerProps } from "../DayPicker";

/**
 * Props for the {@link Week} component.
 *
 * @private
 */
export type WeekProps = {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
};

/**
 * Format the weekday name.
 *
 * @private
 */
export type WeekdayNameFormatter = (
  day: Date,
  options?: { locale?: dateFns.Locale }
) => string;
