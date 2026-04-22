import { km as dateFnsKm } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Khmer locale extended with DayPicker-specific translations. */
export const km: DayPickerLocale = {
  ...dateFnsKm,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `ថ្ងៃ​នេះ, ${label}`;
      if (modifiers.selected) label = `${label}, បាន​ជ្រើស`;
      return label;
    },
    labelMonthDropdown: "ជ្រើសខែ",
    labelNext: "ទៅខែក្រោយ",
    labelPrevious: "ទៅខែមុន",
    labelWeekNumber: (weekNumber: number) => `សប្ដាហ៍ ${weekNumber}`,
    labelYearDropdown: "ជ្រើសឆ្នាំ",
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
        label = `ថ្ងៃ​នេះ, ${label}`;
      }
      return label;
    },
    labelNav: "របាររុករក",
    labelWeekNumberHeader: "លេខសប្ដាហ៍",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
