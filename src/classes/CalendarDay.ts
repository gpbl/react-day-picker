import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

/** Represent a day displayed in a month grid. */
export class CalendarDay {
  /** Create a CalendarDay. */
  constructor(date: Date, displayMonth: Date) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
  }

  /** Whether the day is outside the display month. */
  readonly outside: boolean;

  /** The months where the date is displayed. */
  readonly displayMonth: Date;

  /** The date represented by this Day. */
  readonly date: Date;

  /**
   * Check if the day is the same as the given day: considering if it is in the
   * same display month.
   */
  isEqualTo(day: CalendarDay) {
    return (
      isSameDay(day.date, this.date) &&
      isSameMonth(day.displayMonth, this.displayMonth)
    );
  }
}
