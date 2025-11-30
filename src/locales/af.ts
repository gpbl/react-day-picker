import { af as dateFnsAf } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Afrikaans locale extended with DayPicker-specific translations.
 */
export const af: DayPickerLocale = {
  ...dateFnsAf,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Vandag, ${label}`;
      if (modifiers.selected) label = `${label}, gekies`;
      return label;
    },
    labelMonthDropdown: "Kies die maand",
    labelNext: "Gaan na volgende maand",
    labelPrevious: "Gaan na vorige maand",
    labelWeekNumber: (weekNumber: number) => `Week ${weekNumber}`,
    labelYearDropdown: "Kies die jaar",
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
        label = `Vandag, ${label}`;
      }
      return label;
    },
    labelNav: "Navigasiebalk",
    labelWeekNumberHeader: "Weeknommer",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
