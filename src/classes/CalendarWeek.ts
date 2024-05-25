import { CalendarDay } from "./CalendarDay";

/** Represent a week in a calendar month. */
export class CalendarWeek {
  /** Create a week. */
  constructor(weekNumber: number, days: CalendarDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  /** The number of the week within the year. */
  weekNumber: number;
  /** The days within the week. */
  days: CalendarDay[];
}
