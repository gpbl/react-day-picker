import { formatWeekNumber } from "./formatWeekNumber.js"

test("should return the formatted week number", () => {
  expect(formatWeekNumber(10)).toEqual("10");
});
