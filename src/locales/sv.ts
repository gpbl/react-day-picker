import { sv as dateFnsSv } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Swedish locale extended with DayPicker-specific translations. */
export const sv: DayPickerLocale = {
  ...dateFnsSv,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Idag, ${label}`;
      if (modifiers.selected) label = `${label}, vald`;
      return label;
    },
    labelMonthDropdown: "Välj månad",
    labelNext: "Gå till nästa månad",
    labelPrevious: "Gå till föregående månad",
    labelWeekNumber: (weekNumber: number) => `Vecka ${weekNumber}`,
    labelYearDropdown: "Välj år",
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
        label = `Idag, ${label}`;
      }
      return label;
    },
    labelNav: "Navigationsfält",
    labelWeekNumberHeader: "Veckonummer",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
