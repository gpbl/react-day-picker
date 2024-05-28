import { labelPrevious } from "./labelPrevious";

test("should return the label", () => {
  expect(labelPrevious(new Date(), {})).toEqual("Previous Month");
});
