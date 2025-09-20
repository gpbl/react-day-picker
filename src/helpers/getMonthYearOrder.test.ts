import { enUS } from "date-fns/locale/en-US";
import { hu } from "date-fns/locale/hu";
import { ja } from "date-fns/locale/ja";

import { DateLib } from "../classes/DateLib.js";

test("defaults to month-first when locale is missing", () => {
  expect(new DateLib().getMonthYearOrder()).toBe("month-first");
});

test("detects month-first locales", () => {
  expect(new DateLib({ locale: enUS }).getMonthYearOrder()).toBe(
    "month-first",
  );
});

test("detects year-first locales", () => {
  expect(new DateLib({ locale: hu }).getMonthYearOrder()).toBe("year-first");
  expect(new DateLib({ locale: ja }).getMonthYearOrder()).toBe("year-first");
});
