import { es } from "date-fns/locale/es";

import type { Modifiers } from "../types";

import { labelDayButton } from "./labelDayButton";

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
test("should return the localized label", () => {
  expect(labelDayButton(day, dayModifiers, { locale: es })).toEqual(
    "lunes, 21 de noviembre de 2022"
  );
});
