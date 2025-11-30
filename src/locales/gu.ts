import { gu as dateFnsGu } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Gujarati locale extended with DayPicker-specific translations.
 */
export const gu: DayPickerLocale = {
  ...dateFnsGu,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `આજે, ${label}`;
      if (modifiers.selected) label = `${label}, પસંદ કરાયેલ`;
      return label;
    },
    labelMonthDropdown: "મહિનો પસંદ કરો",
    labelNext: "આગલા મહિને જાઓ",
    labelPrevious: "પાછલા મહિને જાઓ",
    labelWeekNumber: (weekNumber: number) => `અઠવાડિયું ${weekNumber}`,
    labelYearDropdown: "વર્ષ પસંદ કરો",
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
        label = `આજે, ${label}`;
      }
      return label;
    },
    labelNav: "નેવિગેશન બાર",
    labelWeekNumberHeader: "અઠવાડિયાનો નંબર",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
