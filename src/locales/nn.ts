import { nn as dateFnsNn } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Norwegian Nynorsk locale extended with DayPicker-specific translations.
 */
export const nn: DayPickerLocale = {
  ...dateFnsNn,
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
      if (modifiers.selected) label = `${label}, vald`;
      return label;
    },
    labelMonthDropdown: "Vel månad",
    labelNext: "Gå til neste månad",
    labelPrevious: "Gå til førre månad",
    labelWeekNumber: (weekNumber: number) => `Veke ${weekNumber}`,
    labelYearDropdown: "Vel år",
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
    labelNav: "Navigasjonslinje",
    labelWeekNumberHeader: "Vekenummer",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
