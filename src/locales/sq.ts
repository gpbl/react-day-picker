import { sq as dateFnsSq } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Albanian locale extended with DayPicker-specific translations. */
export const sq: DayPickerLocale = {
  ...dateFnsSq,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Sot, ${label}`;
      if (modifiers.selected) label = `${label}, zgjedhur`;
      return label;
    },
    labelMonthDropdown: "Zgjidhni muajin",
    labelNext: "Shko te muaji tjetër",
    labelPrevious: "Shko te muaji i mëparshëm",
    labelWeekNumber: (weekNumber: number) => `Java ${weekNumber}`,
    labelYearDropdown: "Zgjidhni vitin",
    labelGrid: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `Sot, ${label}`;
      }
      return label;
    },
    labelNav: "Shiriti i navigimit",
    labelWeekNumberHeader: "Numri i javës",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
