import { mt as dateFnsMt } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Maltese locale extended with DayPicker-specific translations.
 */
export const mt: DayPickerLocale = {
  ...dateFnsMt,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Illum, ${label}`;
      if (modifiers.selected) label = `${label}, magħżul`;
      return label;
    },
    labelMonthDropdown: "Agħżel ix-xahar",
    labelNext: "Mur għax-xahar li jmiss",
    labelPrevious: "Mur għax-xahar ta' qabel",
    labelWeekNumber: (weekNumber: number) => `Ġimgħa ${weekNumber}`,
    labelYearDropdown: "Agħżel is-sena",
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
        label = `Illum, ${label}`;
      }
      return label;
    },
    labelNav: "Bar tan-navigazzjoni",
    labelWeekNumberHeader: "Numru tal-ġimgħa",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
