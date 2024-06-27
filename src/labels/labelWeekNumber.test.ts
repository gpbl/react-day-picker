import { labelWeekNumber } from "./labelWeekNumber.js"

test("should return the label", () => {
  expect(labelWeekNumber(2)).toEqual("Week 2");
});
