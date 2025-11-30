import { lv as dateFnsLv } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Latvian locale extended with DayPicker-specific translations.
 */
export const lv: DayPickerLocale = {
  ...dateFnsLv,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Šodien, ${label}`;
      if (modifiers.selected) label = `${label}, izvēlēts`;
      return label;
    },
    labelMonthDropdown: "Izvēlieties mēnesi",
    labelNext: "Uz nākamo mēnesi",
    labelPrevious: "Uz iepriekšējo mēnesi",
    labelWeekNumber: (weekNumber: number) => `Nedēļa ${weekNumber}`,
    labelYearDropdown: "Izvēlieties gadu",
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
        label = `Šodien, ${label}`;
      }
      return label;
    },
    labelNav: "Navigācijas josla",
    labelWeekNumberHeader: "Nedēļas numurs",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
