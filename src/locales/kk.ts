import { kk as dateFnsKk } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Kazakh locale extended with DayPicker-specific translations. */
export const kk: DayPickerLocale = {
  ...dateFnsKk,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Бүгін, ${label}`;
      if (modifiers.selected) label = `${label}, таңдалған`;
      return label;
    },
    labelMonthDropdown: "Айды таңдаңыз",
    labelNext: "Келесі айға өту",
    labelPrevious: "Алдыңғы айға өту",
    labelWeekNumber: (weekNumber: number) => `Апта ${weekNumber}`,
    labelYearDropdown: "Жылды таңдаңыз",
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
        label = `Бүгін, ${label}`;
      }
      return label;
    },
    labelNav: "Навигация жолағы",
    labelWeekNumberHeader: "Апта нөмірі",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
