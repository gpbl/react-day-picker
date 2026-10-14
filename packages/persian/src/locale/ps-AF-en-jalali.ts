import type { Month } from "date-fns";

import type { DayPickerLocale } from "../classes/DateLib.js";
import { enUSJalali } from "./en-US-jalali.js";

const months = [
  "Wray",
  "Ghwayay",
  "Ghabargolay",
  "Changakh",
  "Zmaray",
  "Wagay",
  "Tala",
  "Laram",
  "Linday",
  "Marghomay",
  "Salwagha",
  "Kab",
] as const;

/** Jalali calendar with romanized Afghan Pashto month names and English labels. */
export const psAFEnJalali: DayPickerLocale = {
  ...enUSJalali,
  code: "ps-AF",
  options: {
    ...enUSJalali.options,
    weekStartsOn: 6,
  },
  localize: {
    ...enUSJalali.localize,
    month: (value, options) => {
      const name = months[value];
      return options?.width === "narrow" ? name.slice(0, 1) : name;
    },
  },
  match: {
    ...enUSJalali.match,
    month: (input, options) => {
      const names =
        options?.width === "narrow"
          ? months.map((name) => name.slice(0, 1))
          : months;
      const index = names.findIndex((name) =>
        input.toLowerCase().startsWith(name.toLowerCase()),
      );
      return index < 0
        ? null
        : { value: index as Month, rest: input.slice(names[index].length) };
    },
  },
};
