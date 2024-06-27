import { labelWeekNumberHeader } from "./labelWeekNumberHeader.js";

test("should return the label", () => {
  expect(labelWeekNumberHeader()).toEqual("Week Number");
});
