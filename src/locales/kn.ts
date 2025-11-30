import { kn as dateFnsKn } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Kannada locale extended with DayPicker-specific translations. */
export const kn: DayPickerLocale = {
  ...dateFnsKn,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `ಇಂದು, ${label}`;
      if (modifiers.selected) label = `${label}, ಆಯ್ಕೆ ಮಾಡಿದ`;
      return label;
    },
    labelMonthDropdown: "ತಿಂಗಳ ಆಯ್ಕೆ",
    labelNext: "ಮುಂದಿನ ತಿಂಗಳಿಗೆ ಹೋಗಿ",
    labelPrevious: "ಹಿಂದಿನ ತಿಂಗಳಿಗೆ ಹೋಗಿ",
    labelWeekNumber: (weekNumber: number) => `ವಾರ ${weekNumber}`,
    labelYearDropdown: "ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ",
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
        label = `ಇಂದು, ${label}`;
      }
      return label;
    },
    labelNav: "ನವಿಗೇಶನ್ ಪಟ್ಟೆ",
    labelWeekNumberHeader: "ವಾರ ಸಂಖ್ಯೆ",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
