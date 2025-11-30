import { ug as dateFnsUg } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Uyghur locale extended with DayPicker-specific translations. */
export const ug: DayPickerLocale = {
  ...dateFnsUg,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `بۈگۈن، ${label}`;
      if (modifiers.selected) label = `${label}، تاللانغان`;
      return label;
    },
    labelMonthDropdown: "ئاي تاللاڭ",
    labelNext: "كېيىنكى ئايغا يۆتكەڭ",
    labelPrevious: "ئالدىنقى ئايغا يۆتكەڭ",
    labelWeekNumber: (weekNumber: number) => `ھەپتە ${weekNumber}`,
    labelYearDropdown: "يىل تاللاڭ",
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
        label = `بۈگۈن، ${label}`;
      }
      return label;
    },
    labelNav: "يولباشچى بالداق",
    labelWeekNumberHeader: "ھەپتە نومۇرى",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
