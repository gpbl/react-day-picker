import type { Day, Month, Week } from '../../classes';
import type { DropdownOption } from '../../components/Dropdown';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { DayPickerProps } from '../../DayPicker';

/** The calendar displayed in DayPicker. */
export interface DayPickerCalendar {
  /** All the unique dates displayed to the calendar. */
  dates: Date[];
  /**
   * All the days displayed in the calendar. As opposite from
   * {@link DayPickerCalendar.dates}, it may return duplicated dates when shown
   * outside the month.
   */
  days: Day[];
  /**
   * The months displayed in the calendar.
   */
  weeks: Week[];
  /**
   * The months displayed in the calendar.
   */
  months: Month[];
  /**
   * The month displayed as first the calendar. When
   * {@link DayPickerProps.numberOfMonths} is greater than `1`, it is the first
   * of the displayed months.
   */
  firstMonth: Date;
  /**
   * The month displayed as last the calendar. When
   * {@link DayPickerProps.numberOfMonths} is greater than `1`, it is the last
   * of the displayed months.
   */
  lastMonth: Date;
  /**
   * The next month to display.
   */
  nextMonth: Date | undefined;
  /**
   * The previous month to display.
   */
  previousMonth: Date | undefined;
  /**
   * The options to use in the years or months dropdowns.
   */
  dropdown: {
    /**
     * The options to use in the months dropdown.
     */
    months: DropdownOption[] | undefined;
    /**
     * The options to use in the years dropdown.
     */
    years: DropdownOption[] | undefined;
  };
  /**
   * Navigate to the specified month. Will fire the
   * {@link DayPickerProps.onMonthChange} callback.
   */
  goToMonth: (month: Date) => void;
  /**
   * Navigate to the next month.
   */
  goToNextMonth: () => void;
  /**
   * Navigate to the previous month.
   */
  goToPreviousMonth: () => void;
  /**
   * Navigate to the specified date. If the second parameter (refDate) is
   * provided and the date is before the refDate, then the month is set to one
   * month before the date.
   *
   * @param date - The date to navigate to.
   * @param dateToCompare - Optional. If `date` is before `dateToCompare`, the
   * month is set to one month before the date.
   */
  goToDate: (date: Date, dateToCompare?: Date) => void;
  /**
   * Whether the given date is included in the displayed months.
   */
  isDateDisplayed: (date: Date) => boolean;
}
