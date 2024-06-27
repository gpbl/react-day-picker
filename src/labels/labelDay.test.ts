import { es } from "date-fns/locale/es.js";

import type { Modifiers } from "../types/index.js";

import { labelDay } from "./labelDay.js";

const day = new Date(2022, 10, 21);
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
  today: false
};
test("should return an empty day label", () => {
  expect(labelDay(day, dayModifiers, { locale: es })).toEqual("");
});
