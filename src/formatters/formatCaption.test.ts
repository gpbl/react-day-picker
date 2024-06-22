import { es } from "date-fns/locale/es";

import { dateLib } from "../lib";

import { formatCaption } from "./formatCaption";

const date = new Date(2022, 10, 21);

test("should return the formatted caption", () => {
  expect(formatCaption(date, {}, dateLib)).toEqual("November 2022");
});

describe("when a locale is passed in", () => {
  test("should format using the locale", () => {
    expect(formatCaption(date, { locale: es }, dateLib)).toEqual(
      "noviembre 2022"
    );
  });
});
