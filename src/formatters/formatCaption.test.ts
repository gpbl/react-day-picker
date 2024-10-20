import { es } from "date-fns/locale/es";

import { DateLib } from "../lib";
import { defaultLocale } from "../lib/locales.js";

import { formatCaption } from "./formatCaption";

const date = new Date(2022, 10, 21);

test("should return the formatted caption", () => {
  expect(
    formatCaption(date, {}, new DateLib({ locale: defaultLocale }))
  ).toEqual("November 2022");
});

describe("when a locale is passed in", () => {
  test("should format using the locale", () => {
    expect(formatCaption(date, {}, new DateLib({ locale: es }))).toEqual(
      "noviembre 2022"
    );
  });
});

describe("when a locale is passed in through date lib", () => {
  test("should format using the locale", () => {
    expect(formatCaption(date, {}, new DateLib({ locale: es }))).toEqual(
      "noviembre 2022"
    );
  });
});
