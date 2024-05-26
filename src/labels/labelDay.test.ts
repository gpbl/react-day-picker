import { es } from "date-fns/locale/es";

import type { DayModifiers } from "../types";

import { labelDay } from "./labelDay";

const day = new Date(2022, 10, 21);
const dayModifiers: DayModifiers = {
  disabled: false,
  excluded: false,
  focusable: false,
  focused: false,
  hidden: false,
  outside: false,
  range_end: false,
  range_middle: false,
  range_start: false,
  selected: false,
  today: false
};
test("should return the day label", () => {
  expect(labelDay(day, dayModifiers, { locale: es })).toEqual(
    "21º noviembre (lunes)"
  );
});
