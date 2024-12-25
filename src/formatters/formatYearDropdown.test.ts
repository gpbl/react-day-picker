import { defaultDateLib } from "../classes";

import { formatYearDropdown } from "./formatYearDropdown";

test("should return the formatted weekday name", () => {
  expect(formatYearDropdown(new Date(2022, 0), defaultDateLib)).toEqual("2022");
});
