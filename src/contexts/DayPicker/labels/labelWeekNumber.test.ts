import { labelWeekNumber } from "./labelWeekNumber";

test("should return the label", () => {
  expect(labelWeekNumber(2)).toEqual("Week 2");
});
