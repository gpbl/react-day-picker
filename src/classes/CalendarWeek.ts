import { CalendarDay } from "./CalendarDay.js";

/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */
export class CalendarWeek {
  constructor(weekNumber: number, days: CalendarDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }

  /** The number of the week within the year. */
  weekNumber: number;

  /** The days that belong to this week. */
  days: CalendarDay[];
}
