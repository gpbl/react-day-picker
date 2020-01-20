import { DayPickerProps } from "./DayPicker";
import { DateWithModifiers } from "../classes/DateWithModifiers";
import { FormatOptions } from "./Formatters";

/**
 * @category Components
 */
export interface WeekProps {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}
/**
 * @category Formatters
 */
export type WeekdayNameFormatter = (
  day: Date,
  options?: FormatOptions
) => string;
