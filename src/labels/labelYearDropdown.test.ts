import { labelYearDropdown } from "./labelYearDropdown";

test("should return the label", () => {
  expect(labelYearDropdown()).toEqual("Choose the Year");
});
