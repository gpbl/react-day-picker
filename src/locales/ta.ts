import { ta as dateFnsTa } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Tamil locale extended with DayPicker-specific translations.
 */
export const ta: DayPickerLocale = {
  ...dateFnsTa,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `இன்று, ${label}`;
      if (modifiers.selected) label = `${label}, தேர்ந்தெடுக்கப்பட்டது`;
      return label;
    },
    labelMonthDropdown: "மாதத்தை தேர்வு செய்யவும்",
    labelNext: "அடுத்த மாதத்துக்கு செல்லவும்",
    labelPrevious: "முந்தைய மாதத்துக்கு செல்லவும்",
    labelWeekNumber: (weekNumber: number) => `வாரம் ${weekNumber}`,
    labelYearDropdown: "ஆண்டை தேர்வு செய்யவும்",
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
        label = `இன்று, ${label}`;
      }
      return label;
    },
    labelNav: "வழிசெலுத்தல் பட்டை",
    labelWeekNumberHeader: "வார எண்",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
