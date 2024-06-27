import { es } from "date-fns/locale/es.js"

import { formatMonthDropdown } from "./formatMonthDropdown.js"

const date = new Date(2022, 10, 21);

test("should return the formatted month dropdown label", () => {
  expect(formatMonthDropdown(date.getMonth())).toEqual("November");
});

describe("when a locale is passed in", () => {
  test("should format using the locale", () => {
    expect(formatMonthDropdown(date.getMonth(), es)).toEqual("noviembre");
  });
});
