import { CalendarWeek } from "./CalendarWeek.js"

/** Represent a month in a calendar year. Contains the weeks within the month. */
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
