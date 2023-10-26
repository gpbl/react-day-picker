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
 * A month displayed in as month grid. Contains the week
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
  /** The current month. When `numberOfMonths` is greater than one, is the first of the displayed months. */
  currentMonth: Date;
  /** The months displayed in the calendar. */
  months: DayPickerMonth[];
  /** All the dates displayed in the calendar. */
  dates: Date[];
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
  /** Whether the given day is included in the displayed months. */
  isDateDisplayed: (day: Date) => boolean;
}
