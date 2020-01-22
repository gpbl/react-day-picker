import * as DateFns from "date-fns";
import { DayPickerProps } from "../DayPicker";

/**
 * The props used by the {@link Head} component.
 *
 * @private
 */
export type HeadProps = {
  locale: DateFns.Locale;
  /**
   * Add a column to accommodate the week numbers.
   */
  showWeekNumber?: boolean;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
};
