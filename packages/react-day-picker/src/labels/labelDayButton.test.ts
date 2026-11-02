import type { DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import { bg } from "../locale/bg.js";
import { de } from "../locale/de.js";
import { enUS } from "../locale/en-US.js";
import { es } from "../locale/es.js";
import { ja } from "../locale/ja.js";
import { zhCN } from "../locale/zh-CN.js";
import type { Modifiers } from "../types";

import { labelDayButton } from "./labelDayButton";

const day = new Date(2022, 10, 21);

/** Returns the `labelDayButton` function of a DayPicker locale. */
const localeLabel = (locale: DayPickerLocale) =>
  locale.labels?.labelDayButton as typeof labelDayButton;
const dayModifiers: Modifiers = {
  disabled: false,
  focusable: false,
  focused: false,
  hidden: false,
  outside: false,
  range_end: false,
  range_middle: false,
  range_start: false,
  selected: false,
  today: false,
};

describe("when the day is selected", () => {
  test("return the label", () => {
    expect(labelDayButton(day, { ...dayModifiers, selected: true })).toEqual(
      "Monday, November 21, 2022, selected",
    );
  });
});

describe("when the day is today", () => {
  test("return the label", () => {
    expect(labelDayButton(day, { ...dayModifiers, today: true })).toEqual(
      "Today, Monday, November 21, 2022",
    );
  });
});

test("should return the localized label", () => {
  expect(labelDayButton(day, dayModifiers, { locale: es })).toEqual(
    "lunes, 21 de noviembre de 2022",
  );
});

describe("the day in the label matches the visible day number", () => {
  const date = new Date(2026, 0, 22);

  test.each([
    ["en-US", enUS, date, "Thursday, January 22, 2026"],
    ["de", de, date, "Donnerstag, 22. Januar 2026"],
    ["bg", bg, new Date(2026, 0, 1), "четвъртък, 1 януари 2026"],
    ["ja", ja, date, "2026年1月22日木曜日"],
    ["zh-CN", zhCN, date, "2026年1月22日 星期四"],
  ])("%s", (_code, locale, day, expected) => {
    const dateLib = new DateLib({ locale });
    expect(localeLabel(locale)(day, dayModifiers, undefined, dateLib)).toBe(
      expected,
    );
  });
});

test("the en-US locale formats without a date library", () => {
  expect(localeLabel(enUS)(new Date(2026, 0, 22), dayModifiers)).toBe(
    "Thursday, January 22, 2026",
  );
});
