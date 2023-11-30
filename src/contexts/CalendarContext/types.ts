import { isSameMonth } from 'date-fns';

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
  /** The date. */
  date: Date;
}

export class DayPickerWeek {
  constructor(weekNumber: number, days: DayPickerDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  weekNumber: number;
  days: DayPickerDay[];
}

/**
 * A month displayed in as month grid. Contains the weeks.
 */
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
  /** All the dates belonging to the calendar. */
  dates: Date[];
  /** The {@link DayPickerMonth | DayPickerMonths} belonging to the calendar. */
  months: DayPickerMonth[];
  /** The current month. When `numberOfMonths` is greater than 1, it is the first of the displayed months. */
  currentMonth: Date;
  /** Return the days in the calendar. */
  getDays: () => DayPickerDay[];
  /** Navigate to the specified month. */
  goToMonth: (month: Date) => void;
  /** Navigate to the next month. */
  goToNextMonth: () => void;
  /** Navigate to the previous month. */
  goToPreviousMonth: () => void;
  /** Navigate to the specified date. */
  goToDate: (date: Date, refDate?: Date) => void;
  /** The next month to display. */
  nextMonth?: Date;
  /** The previous month to display. */
  previousMonth?: Date;
  /** Whether the given date is included in the displayed months. */
  isDateDisplayed: (date: Date) => boolean;
}
