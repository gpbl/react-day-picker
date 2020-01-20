import { DayPickerProps } from "./DayPicker";
import * as DateFns from "date-fns";

/**
 * @category Components
 */
export interface HeadProps {
  locale: DateFns.Locale;
  showWeekNumber: boolean;
  dayPickerProps: DayPickerProps;
}
