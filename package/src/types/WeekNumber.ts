import { DayPickerProps } from "./DayPicker";
import { FormatOptions } from "./Formatters";

/**
 * @category Components
 */
export interface WeekNumberProps {
  number: number;
  days: Array<Date>;
  dayPickerProps: DayPickerProps;
}

/**
 * @category Formatters
 */
export type WeekNumberFormatter = (
  weekNumber: number,
  options?: FormatOptions
) => string;
