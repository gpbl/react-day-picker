import { labelYearDropdown } from "./labelYearDropdown.js";

test("should return the label", () => {
  expect(labelYearDropdown()).toEqual("Year: ");
});
