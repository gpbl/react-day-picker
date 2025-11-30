import { az as dateFnsAz } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Azerbaijani locale extended with DayPicker-specific translations.
 */
export const az: DayPickerLocale = {
  ...dateFnsAz,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Bu gün, ${label}`;
      if (modifiers.selected) label = `${label}, seçilmiş`;
      return label;
    },
    labelMonthDropdown: "Ayı seçin",
    labelNext: "Növbəti aya keç",
    labelPrevious: "Əvvəlki aya keç",
    labelWeekNumber: (weekNumber: number) => `Həftə ${weekNumber}`,
    labelYearDropdown: "İli seçin",
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
        label = `Bu gün, ${label}`;
      }
      return label;
    },
    labelNav: "Naviqasiya paneli",
    labelWeekNumberHeader: "Həftə nömrəsi",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
