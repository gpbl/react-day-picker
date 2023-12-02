import { isSameMonth } from 'date-fns';
import { DropdownOption } from '../../components';
import type { DayPickerProps } from '../../DayPicker';
import type { Formatters } from '../../types/formatters';
import type { DayPickerContext } from '../../contexts/DayPickerContext';

/** Represent a day displayed in a month. */
export class DayPickerDay {
  constructor(date: Date, displayMonth: Date) {
    this.date = date;
    if (!isSameMonth(date, displayMonth)) {
      this.displayMonth = displayMonth;
    }
  }
  /** In case of an outside day, the months where the date is displayed.  */
  displayMonth?: Date;
  /** The date represented by this instance. */
  date: Date;
}

/** A week displayed in a month grid. Contains the days. */
export class DayPickerWeek {
  constructor(weekNumber: number, days: DayPickerDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  weekNumber: number;
  days: DayPickerDay[];
}

/** A month displayed in the month grid. Contains the weeks. */
export class DayPickerMonth {
  constructor(month: Date, weeks: DayPickerWeek[]) {
    this.date = month;
    this.weeks = weeks;
  }
  /** The date of the month. */
  date: Date;
  /** The weeks within the month. */
  weeks: DayPickerWeek[];
}

/** The calendar displayed in DayPicker. */
export interface DayPickerCalendar {
  /** All the unique dates belonging to the calendar. */
  dates: Date[];
  /** The {@link DayPickerMonth | DayPickerMonths} displayed in the calendar. */
  dayPickerMonths: DayPickerMonth[];
  /**
   * The current month. When {@link DayPickerProps.numberOfMonths} is greater than `1`, it is the first of the displayed months. */
  currentMonth: Date;
  /**
   * Return all the days displayed int the calendar. As opposite from
   * {@link DayPickerCalendar.dates}, it may return duplicated dates when
   * shown in the calendar outside the month.
   */
  getDayPickerDays: () => DayPickerDay[];
  /**
   * When {@link DayPickerContext.fromDate} or {@link DayPickerContext.toDate}
   * are set, return an array of tuples representing the months the calendar can
   * navigate to (from `0` (January) to `11` (December)), and its formatted labels.
   *
   * - Use this method to get the months to display in the navigation drop-down.
   * - To format the label, use {@link Formatters.formatMonthDropdown}.
   */
  getDropdownMonths: () => DropdownOption[] | undefined;
  /**
   * When {@link DayPickerContext.fromDate} or {@link DayPickerContext.toDate}
   * are set, return an array of tuples representing the years the calendar can
   * navigate to and its formatted labels.
   *
   * - Use this method to get the years to display in the navigation drop-down.
   * - To format the label, use {@link Formatters.formatYearDropdown}.
   */
  getDropdownYears: () => DropdownOption[] | undefined;
  /**
   * Navigate to the specified month. Will fire the {@link DayPickerProps.onMonthChange} callback. */
  goToMonth: (month: Date) => void;
  /** Navigate to the next month. */
  goToNextMonth: () => void;
  /** Navigate to the previous month. */
  goToPreviousMonth: () => void;
  /**
   * Navigate to the specified date. If the second parameter (refDate) is
   * provided and the date is before the refDate, then the month is set to one
   * month before the date
   * @param date - The date to navigate to
   * @param dateToCompare - Optional. If `date` is before `dateToCompare`, the
   * month is set to one month before the date
   */
  goToDate: (date: Date, dateToCompare?: Date) => void;
  /** The next month to display. */
  nextMonth?: Date;
  /** The previous month to display. */
  previousMonth?: Date;
  /** Whether the given date is included in the displayed months. */
  isDateDisplayed: (date: Date) => boolean;
}
