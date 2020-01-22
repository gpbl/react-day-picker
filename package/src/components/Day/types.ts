import * as DateFns from "date-fns";
import { MatchingModifiers, DayPickerProps } from "../DayPicker";

/**
 * The props used by the {@link Day} component.
 */
export type DayProps = {
  /**
   * The day to display in the calendar.
   */
  day: Date;
  /**
   * The modifiers that matches the given day.
   */
  modifiers: MatchingModifiers;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
};

/**
 * A function that format the day for the {@link Day} component.
 */
export type DayFormatter = (
  day: Date,
  options?: { locale?: DateFns.Locale }
) => string;
