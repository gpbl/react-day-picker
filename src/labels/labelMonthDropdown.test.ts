import { labelMonthDropdown } from "./labelMonthDropdown.js"

test("should return the label", () => {
  expect(labelMonthDropdown({})).toEqual("Month: ");
});
