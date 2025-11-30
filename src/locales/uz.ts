import { uz as dateFnsUz } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Uzbek (Latin) locale extended with DayPicker-specific translations. */
export const uz: DayPickerLocale = {
  ...dateFnsUz,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Bugun, ${label}`;
      if (modifiers.selected) label = `${label}, tanlangan`;
      return label;
    },
    labelMonthDropdown: "Oyni tanlang",
    labelNext: "Keyingi oyga o'ting",
    labelPrevious: "Oldingi oyga o'ting",
    labelWeekNumber: (weekNumber: number) => `Hafta ${weekNumber}`,
    labelYearDropdown: "Yilni tanlang",
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
        label = `Bugun, ${label}`;
      }
      return label;
    },
    labelNav: "Navigatsiya paneli",
    labelWeekNumberHeader: "Hafta raqami",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
