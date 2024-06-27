import { formatYearDropdown } from "./formatYearDropdown.js"

test("should return the formatted weekday name", () => {
  expect(formatYearDropdown(2022)).toEqual("2022");
});
