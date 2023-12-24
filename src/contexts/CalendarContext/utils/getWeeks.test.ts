import { CalendarDay, Month, Week } from '../../../classes';
import { getWeeks } from './getWeeks';

const days1 = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1)),
  new CalendarDay(new Date(2023, 1, 13), new Date(2023, 1, 1))
];
const days2 = [
  new CalendarDay(new Date(2023, 1, 13), new Date(2023, 1, 1)),
  new CalendarDay(new Date(2023, 1, 14), new Date(2023, 1, 1))
];
const days3 = [
  new CalendarDay(new Date(2023, 2, 12), new Date(2023, 2, 1)),
  new CalendarDay(new Date(2023, 2, 13), new Date(2023, 2, 1))
];
const days4 = [
  new CalendarDay(new Date(2023, 2, 13), new Date(2023, 2, 1)),
  new CalendarDay(new Date(2023, 2, 14), new Date(2023, 2, 1))
];
const weeks1 = [new Week(1, days1), new Week(2, days2)];
const weeks2 = [new Week(3, days3), new Week(4, days4)];
const months = [
  new Month(days1[0].date, weeks1),
  new Month(days1[0].date, weeks2)
];

it('should return all the days belonging to the calendar by merging the days in the weeks for each month', () => {
  expect(getWeeks(months)).toEqual([...weeks1, ...weeks2]);
});
