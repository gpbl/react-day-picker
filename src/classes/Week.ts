import { Day } from './Day';

/** A week displayed in a month grid. Contains the days. */
export class Week {
  constructor(weekNumber: number, days: Day[]) {
    this.days = days;
    this.weekNumber = weekNumber;
  }
  weekNumber: number;
  days: Day[];
}
