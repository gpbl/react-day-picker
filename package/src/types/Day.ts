import { MatchingModifiers } from "./Modifiers";
import { DayPickerProps } from "./DayPicker";
import { FormatOptions } from "./Formatters";

/**
 * The props used by the {@link Day} component.
 *
 * @category Components
 */
export interface DayProps {
  /**
   * The day to display in the calendar.
   */
  day: Date;
  /**
   * The modifiers that matches the given day.
   */
  modifiers: MatchingModifiers;
  /**
   * Reference to the props used by the DayPicker component. Usually you want to
   * use it when using the {@link getDayProps} helper.
   */
  dayPickerProps: DayPickerProps;
}
/**
 * @category Formatters
 */
export type DayFormatter = (day: Date, options?: FormatOptions) => string;
