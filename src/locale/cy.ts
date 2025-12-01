import { cy as dateFnsCy } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Welsh locale extended with DayPicker-specific translations. */
export const cy: DayPickerLocale = {
  ...dateFnsCy,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Heddiw, ${label}`;
      if (modifiers.selected) label = `${label}, wedi'i ddewis`;
      return label;
    },
    labelMonthDropdown: "Dewiswch y mis",
    labelNext: "Ewch i'r mis nesaf",
    labelPrevious: "Ewch i'r mis blaenorol",
    labelWeekNumber: (weekNumber: number) => `Wythnos ${weekNumber}`,
    labelYearDropdown: "Dewiswch y flwyddyn",
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
        label = `Heddiw, ${label}`;
      }
      return label;
    },
    labelNav: "Bar llywio",
    labelWeekNumberHeader: "Rhif yr wythnos",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
