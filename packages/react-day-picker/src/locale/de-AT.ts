import { deAT as dateFnsDeAT } from "date-fns/locale/de-AT";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** German (Austria) locale extended with DayPicker-specific translations. */
export const deAT: DayPickerLocale = {
  ...dateFnsDeAT,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Heute, ${label}`;
      if (modifiers.selected) label = `${label}, ausgewählt`;
      return label;
    },
    labelMonthDropdown: "Monat auswählen",
    labelNext: "Zum nächsten Monat",
    labelPrevious: "Zum vorherigen Monat",
    labelWeekNumber: (weekNumber: number) => `Woche ${weekNumber}`,
    labelYearDropdown: "Jahr auswählen",
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
        label = `Heute, ${label}`;
      }
      return label;
    },
    labelNav: "Navigationsleiste",
    labelWeekNumberHeader: "Wochennummer",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
