import { DayPickerProps } from "../DayPicker";
import * as DateFns from "date-fns";

export interface WeekNumberProps {
  number: number;
  days: Array<Date>;
  dayPickerProps: DayPickerProps;
}

export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale: DateFns.Locale }
) => string;
