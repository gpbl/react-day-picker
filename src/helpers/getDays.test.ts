import { CalendarDay, CalendarWeek, CalendarMonth } from "../classes";

import { getDays } from "./getDays";

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
const weeks1 = [new CalendarWeek(1, days1), new CalendarWeek(2, days2)];
const weeks2 = [new CalendarWeek(3, days3), new CalendarWeek(4, days4)];
const months = [
  new CalendarMonth(days1[0].date, weeks1),
  new CalendarMonth(days1[0].date, weeks2)
];

it("should return all the days belonging to the calendar by merging the days in the weeks for each month", () => {
  expect(getDays(months)).toEqual([...days1, ...days2, ...days3, ...days4]);
});
