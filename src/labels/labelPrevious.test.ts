import { labelPrevious } from "./labelPrevious.js"

test("should return the label", () => {
  expect(labelPrevious(new Date(), {})).toEqual("Previous Month");
});
