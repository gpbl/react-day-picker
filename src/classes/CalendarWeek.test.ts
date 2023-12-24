import { CalendarDay } from './CalendarDay';
import { Week } from './CalendarWeek';

let week: Week;
const days = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1)),
  new CalendarDay(new Date(2023, 1, 2023), new Date(2023, 1, 1))
];

beforeEach(() => {
  week = new Week(1, days);
});

it('should have a weekNumber', () => {
  expect(week.weekNumber).toEqual(1);
});

it('should have an array of days', () => {
  expect(week.days).toBe(days);
  expect(week.days[0]).toBeInstanceOf(CalendarDay);
});
