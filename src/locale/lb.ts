import { lb as dateFnsLb } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Luxembourgish locale extended with DayPicker-specific translations. */
export const lb: DayPickerLocale = {
  ...dateFnsLb,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Haut, ${label}`;
      if (modifiers.selected) label = `${label}, ausgewielt`;
      return label;
    },
    labelMonthDropdown: "Mount auswielen",
    labelNext: "Op de nächste Mount",
    labelPrevious: "Op de virdrun Mount",
    labelWeekNumber: (weekNumber: number) => `Woch ${weekNumber}`,
    labelYearDropdown: "Joer auswielen",
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
        label = `Haut, ${label}`;
      }
      return label;
    },
    labelNav: "Navigatiounsbar",
    labelWeekNumberHeader: "Wochennummer",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
