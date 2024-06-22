import { dateLib } from "../lib";

import { CalendarDay } from "./CalendarDay";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarWeek } from "./CalendarWeek";

let month: CalendarMonth;
let date: Date;
let weeks: CalendarWeek[];
const days1 = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1), dateLib),
  new CalendarDay(new Date(2023, 1, 2023), new Date(2023, 1, 1), dateLib)
];
const days2 = [
  new CalendarDay(new Date(2023, 1, 12), new Date(2023, 1, 1), dateLib),
  new CalendarDay(new Date(2023, 1, 2023), new Date(2023, 1, 1), dateLib)
];
beforeEach(() => {
  date = new Date();
  weeks = [new CalendarWeek(1, days1), new CalendarWeek(2, days2)];
  month = new CalendarMonth(date, weeks);
});

it("should have a date property", () => {
  expect(month.date).toEqual(date);
});

it("should have a weeks property", () => {
  expect(month.weeks).toEqual(weeks);
});
