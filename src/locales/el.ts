import { el as dateFnsEl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Greek locale extended with DayPicker-specific translations.
 */
export const el: DayPickerLocale = {
  ...dateFnsEl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Σήμερα, ${label}`;
      if (modifiers.selected) label = `${label}, επιλεγμένο`;
      return label;
    },
    labelMonthDropdown: "Επιλέξτε μήνα",
    labelNext: "Μετάβαση στον επόμενο μήνα",
    labelPrevious: "Μετάβαση στον προηγούμενο μήνα",
    labelWeekNumber: (weekNumber: number) => `Εβδομάδα ${weekNumber}`,
    labelYearDropdown: "Επιλέξτε έτος",
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
        label = `Σήμερα, ${label}`;
      }
      return label;
    },
    labelNav: "Γραμμή πλοήγησης",
    labelWeekNumberHeader: "Αριθμός εβδομάδας",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
