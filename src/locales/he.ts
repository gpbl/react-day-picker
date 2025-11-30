import { he as dateFnsHe } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Hebrew locale extended with DayPicker-specific translations.
 */
export const he: DayPickerLocale = {
  ...dateFnsHe,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `היום, ${label}`;
      if (modifiers.selected) label = `${label}, נבחר`;
      return label;
    },
    labelMonthDropdown: "בחר את החודש",
    labelNext: "עבור לחודש הבא",
    labelPrevious: "עבור לחודש הקודם",
    labelWeekNumber: (weekNumber: number) => `שבוע ${weekNumber}`,
    labelYearDropdown: "בחר את השנה",
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
        label = `היום, ${label}`;
      }
      return label;
    },
    labelNav: "סרגל ניווט",
    labelWeekNumberHeader: "מספר שבוע",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
