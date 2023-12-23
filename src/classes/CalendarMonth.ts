import { CalendarWeek } from './CalendarWeek';

/** A month displayed in the month grid. Contains the weeks. */
export class CalendarMonth {
  constructor(month: Date, weeks: CalendarWeek[]) {
    this.date = month;
    this.weeks = weeks;
  }
  /** The date of the month. */
  date: Date;
  /** The weeks within the month. */
  weeks: CalendarWeek[];
}
