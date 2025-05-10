import { DateLib } from "../classes";

import { formatWeekNumber } from "./formatWeekNumber";

test("should return the formatted week number", () => {
  expect(formatWeekNumber(10)).toEqual("10");
});

test("should return the formatted week number with leading zero", () => {
  expect(formatWeekNumber(1)).toEqual("01");
});

test("should format with the provided numeral system", () => {
  const dateLib = new DateLib({ numerals: "arab" });
  expect(formatWeekNumber(1, dateLib)).toEqual("٠١");
});
