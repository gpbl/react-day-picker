import { se as dateFnsSe } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Northern Sami locale extended with DayPicker-specific translations. */
export const se: DayPickerLocale = {
  ...dateFnsSe,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Odne, ${label}`;
      if (modifiers.selected) label = `${label}, válljejuvvon`;
      return label;
    },
    labelMonthDropdown: "Vállje mánnu",
    labelNext: "Mana boahtte mánu",
    labelPrevious: "Mana ovddit mánu",
    labelWeekNumber: (weekNumber: number) => `Vahkku ${weekNumber}`,
    labelYearDropdown: "Vállje jahki",
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
        label = `Odne, ${label}`;
      }
      return label;
    },
    labelNav: "Navigasuvnnabár",
    labelWeekNumberHeader: "Vahkku lohku",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
