import { da as dateFnsDa } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Danish locale extended with DayPicker-specific translations.
 */
export const da: DayPickerLocale = {
  ...dateFnsDa,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `I dag, ${label}`;
      if (modifiers.selected) label = `${label}, valgt`;
      return label;
    },
    labelMonthDropdown: "Vælg måned",
    labelNext: "Gå til næste måned",
    labelPrevious: "Gå til forrige måned",
    labelWeekNumber: (weekNumber: number) => `Uge ${weekNumber}`,
    labelYearDropdown: "Vælg år",
    labelGrid: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `I dag, ${label}`;
      }
      return label;
    },
    labelNav: "Navigationslinje",
    labelWeekNumberHeader: "Ugenummer",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
