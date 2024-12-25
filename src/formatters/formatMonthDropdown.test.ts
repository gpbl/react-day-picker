import { es } from "date-fns/locale/es";

import { DateLib, defaultDateLib } from "../classes/DateLib";

import { formatMonthDropdown } from "./formatMonthDropdown";

const date = new Date(2022, 10, 21);

test("should return the formatted month dropdown label", () => {
  expect(formatMonthDropdown(date, defaultDateLib)).toEqual("November");
});

describe("when a locale is passed in", () => {
  test("should format using the locale", () => {
    expect(formatMonthDropdown(date, new DateLib({ locale: es }))).toEqual(
      "noviembre"
    );
  });
});
