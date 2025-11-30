import { fy as dateFnsFy } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Frisian locale extended with DayPicker-specific translations.
 */
export const fy: DayPickerLocale = {
  ...dateFnsFy,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hjoed, ${label}`;
      if (modifiers.selected) label = `${label}, selektearre`;
      return label;
    },
    labelMonthDropdown: "Kies de moanne",
    labelNext: "Nei folgjende moanne",
    labelPrevious: "Nei foarige moanne",
    labelWeekNumber: (weekNumber: number) => `Wike ${weekNumber}`,
    labelYearDropdown: "Kies it jier",
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
        label = `Hjoed, ${label}`;
      }
      return label;
    },
    labelNav: "Navigaasjebalke",
    labelWeekNumberHeader: "Wikenûmer",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
