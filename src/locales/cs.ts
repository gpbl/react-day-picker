import { cs as dateFnsCs } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Czech locale extended with DayPicker-specific translations.
 */
export const cs: DayPickerLocale = {
  ...dateFnsCs,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Dnes, ${label}`;
      if (modifiers.selected) label = `${label}, vybráno`;
      return label;
    },
    labelMonthDropdown: "Vyberte měsíc",
    labelNext: "Přejít na další měsíc",
    labelPrevious: "Přejít na předchozí měsíc",
    labelWeekNumber: (weekNumber: number) => `Týden ${weekNumber}`,
    labelYearDropdown: "Vyberte rok",
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
        label = `Dnes, ${label}`;
      }
      return label;
    },
    labelNav: "Navigační panel",
    labelWeekNumberHeader: "Číslo týdne",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
