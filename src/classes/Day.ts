import { isSameMonth } from 'date-fns';

/** A day displayed in a month grid. */
export class Day {
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
