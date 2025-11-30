import { nl as dateFnsNl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Dutch locale extended with DayPicker-specific translations. */
export const nl: DayPickerLocale = {
  ...dateFnsNl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Vandaag, ${label}`;
      if (modifiers.selected) label = `${label}, geselecteerd`;
      return label;
    },
    labelMonthDropdown: "Kies de maand",
    labelNext: "Ga naar volgende maand",
    labelPrevious: "Ga naar vorige maand",
    labelWeekNumber: (weekNumber: number) => `Week ${weekNumber}`,
    labelYearDropdown: "Kies het jaar",
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
        label = `Vandaag, ${label}`;
      }
      return label;
    },
    labelNav: "Navigatiebalk",
    labelWeekNumberHeader: "Weeknummer",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
