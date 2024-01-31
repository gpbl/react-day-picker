import { Week } from './CalendarWeek';

/**
 * A month displayed in the month grid. Contains the weeks.
 *
 * @category Classes
 */
export class Month {
  constructor(month: Date, weeks: Week[]) {
    this.date = month;
    this.weeks = weeks;
  }
  /** The date of the month. */
  date: Date;
  /** The weeks within the month. */
  weeks: Week[];
}
