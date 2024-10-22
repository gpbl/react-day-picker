import { es } from "date-fns/locale/es";

import { defaultLocale, DateLib } from "../classes/DateLib.js";

import { formatCaption } from "./formatCaption";

const date = new Date(2022, 10, 21);

test("should return the formatted caption", () => {
  expect(
    formatCaption(date, {}, new DateLib({ locale: defaultLocale }))
  ).toEqual("November 2022");
});

describe("when a locale is passed in through dateLib argument", () => {
  test("should format using the locale", () => {
    expect(formatCaption(date, {}, new DateLib({ locale: es }))).toEqual(
      "noviembre 2022"
    );
  });
});

describe("when a locale is passed in from options", () => {
  test("should format using the locale", () => {
    expect(formatCaption(date, { locale: es })).toEqual("noviembre 2022");
  });
});
