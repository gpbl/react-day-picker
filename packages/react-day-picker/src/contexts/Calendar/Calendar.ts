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

export class DayPickerMonth {
  constructor(month: Date, weeks: DayPickerWeek[]) {
    this.month = month;
    this.weeks = weeks;
  }
  month: Date;
  weeks: DayPickerWeek[];
}

export type DayPickerCalendar = {
  months: DayPickerMonth[];
  dates: Date[];
};
