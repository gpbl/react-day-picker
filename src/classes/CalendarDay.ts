import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';

/** A day displayed in a month grid. */
export class CalendarDay {
  constructor(date: Date, displayMonth: Date) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
  }

  /**
   * In case of an outside day, the months where the date is displayed.
   */
  readonly outside: boolean;

  /**
   * The months where the date is displayed
   */
  readonly displayMonth: Date;

  /** The date represented by this Day. */
  readonly date: Date;

  /** Whether the day is the same as the given day. */
  isEqualTo(day: CalendarDay) {
    return (
      isSameDay(day.date, this.date) &&
      isSameMonth(day.displayMonth, this.displayMonth)
    );
  }
}
