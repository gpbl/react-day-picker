import { Day } from './Day';
import { Week } from './Week';

let week: Week;
const days = [
  new Day(new Date(2023, 1, 12), new Date(2023, 1, 1)),
  new Day(new Date(2023, 1, 2023), new Date(2023, 1, 1))
];

beforeEach(() => {
  week = new Week(1, days);
});

it('should have a weekNumber', () => {
  expect(week.weekNumber).toEqual(1);
});

it('should have an array of days', () => {
  expect(week.days).toBe(days);
  expect(week.days[0]).toBeInstanceOf(Day);
});
