import { CalendarDay } from './CalendarDay';
import { Month } from './CalendarMonth';
import { Week } from './CalendarWeek';

let month: Month;
let date: Date;
let weeks: Week[];
const days1 = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1)),
  new CalendarDay(new Date(2023, 1, 2023), new Date(2023, 1, 1))
];
const days2 = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1)),
  new CalendarDay(new Date(2023, 1, 2023), new Date(2023, 1, 1))
];
beforeEach(() => {
  date = new Date();
  weeks = [new Week(1, days1), new Week(2, days2)];
  month = new Month(date, weeks);
});

it('should have a date property', () => {
  expect(month.date).toEqual(date);
});

it('should have a weeks property', () => {
  expect(month.weeks).toEqual(weeks);
});
