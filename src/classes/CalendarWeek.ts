import { CalendarDay } from './CalendarDay';

/** A week displayed in a month grid. Contains the days. */
export class CalendarWeek {
  constructor(weekNumber: number, days: CalendarDay[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  weekNumber: number;
  days: CalendarDay[];
}
