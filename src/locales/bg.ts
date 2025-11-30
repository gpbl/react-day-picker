import { bg as dateFnsBg } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Bulgarian locale extended with DayPicker-specific translations.
 */
export const bg: DayPickerLocale = {
  ...dateFnsBg,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Днес, ${label}`;
      if (modifiers.selected) label = `${label}, избрано`;
      return label;
    },
    labelMonthDropdown: "Изберете месец",
    labelNext: "Към следващия месец",
    labelPrevious: "Към предишния месец",
    labelWeekNumber: (weekNumber: number) => `Седмица ${weekNumber}`,
    labelYearDropdown: "Изберете година",
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
        label = `Днес, ${label}`;
      }
      return label;
    },
    labelNav: "Лента за навигация",
    labelWeekNumberHeader: "Номер на седмица",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
