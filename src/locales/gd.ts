import { gd as dateFnsGd } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Scottish Gaelic locale extended with DayPicker-specific translations. */
export const gd: DayPickerLocale = {
  ...dateFnsGd,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `An-diugh, ${label}`;
      if (modifiers.selected) label = `${label}, air a thaghadh`;
      return label;
    },
    labelMonthDropdown: "Tagh am mìos",
    labelNext: "Rach gu mìos an ath mhìos",
    labelPrevious: "Rach gu mìos roimhe",
    labelWeekNumber: (weekNumber: number) => `Seachdain ${weekNumber}`,
    labelYearDropdown: "Tagh am bliadhna",
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
        label = `An-diugh, ${label}`;
      }
      return label;
    },
    labelNav: "Bàr seòlaidh",
    labelWeekNumberHeader: "Àireamh seachdain",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
