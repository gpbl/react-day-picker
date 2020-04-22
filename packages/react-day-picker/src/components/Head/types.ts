import * as DateFns from 'date-fns';
import { DayPickerProps } from '../DayPicker';

/**
 * The props used by the [[Head]] component.
 */
export interface HeadProps {
  locale: DateFns.Locale;
  /**
   * Add a column to accommodate the week numbers.
   */
  showWeekNumber?: boolean;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
}
