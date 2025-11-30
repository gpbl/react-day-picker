import { uzCyrl as dateFnsUzCyrl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Uzbek (Cyrillic) locale extended with DayPicker-specific translations.
 */
export const uzCyrl: DayPickerLocale = {
  ...dateFnsUzCyrl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Бугун, ${label}`;
      if (modifiers.selected) label = `${label}, танланган`;
      return label;
    },
    labelMonthDropdown: "Ойни танланг",
    labelNext: "Кейинги ойга ўтинг",
    labelPrevious: "Олдинги ойга ўтинг",
    labelWeekNumber: (weekNumber: number) => `Ҳафта ${weekNumber}`,
    labelYearDropdown: "Йилни танланг",
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
        label = `Бугун, ${label}`;
      }
      return label;
    },
    labelNav: "Навигация панели",
    labelWeekNumberHeader: "Ҳафта рақами",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
