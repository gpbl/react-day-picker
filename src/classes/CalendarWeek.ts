import { CalendarDay } from "./CalendarDay.js";

/** Represent a week in a calendar month. */
export class CalendarWeek {
  constructor(weekNumber: number, days: CalendarDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  /** The number of the week within the year. */
  weekNumber: number;
  /** The days within the week. */
  days: CalendarDay[];
}
