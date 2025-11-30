import { lt as dateFnsLt } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Lithuanian locale extended with DayPicker-specific translations. */
export const lt: DayPickerLocale = {
  ...dateFnsLt,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Šiandien, ${label}`;
      if (modifiers.selected) label = `${label}, pasirinkta`;
      return label;
    },
    labelMonthDropdown: "Pasirinkite mėnesį",
    labelNext: "Pereiti į kitą mėnesį",
    labelPrevious: "Pereiti į ankstesnį mėnesį",
    labelWeekNumber: (weekNumber: number) => `Savaitė ${weekNumber}`,
    labelYearDropdown: "Pasirinkite metus",
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
        label = `Šiandien, ${label}`;
      }
      return label;
    },
    labelNav: "Naršymo juosta",
    labelWeekNumberHeader: "Savaitės numeris",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
