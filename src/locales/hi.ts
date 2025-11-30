import { hi as dateFnsHi } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Hindi locale extended with DayPicker-specific translations.
 */
export const hi: DayPickerLocale = {
  ...dateFnsHi,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `आज, ${label}`;
      if (modifiers.selected) label = `${label}, चयनित`;
      return label;
    },
    labelMonthDropdown: "महीना चुनें",
    labelNext: "अगले महीने पर जाएं",
    labelPrevious: "पिछले महीने पर जाएं",
    labelWeekNumber: (weekNumber: number) => `सप्ताह ${weekNumber}`,
    labelYearDropdown: "वर्ष चुनें",
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
        label = `आज, ${label}`;
      }
      return label;
    },
    labelNav: "नेविगेशन बार",
    labelWeekNumberHeader: "सप्ताह संख्या",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
