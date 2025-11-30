import { ro as dateFnsRo } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Romanian locale extended with DayPicker-specific translations.
 */
export const ro: DayPickerLocale = {
  ...dateFnsRo,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Astăzi, ${label}`;
      if (modifiers.selected) label = `${label}, selectat`;
      return label;
    },
    labelMonthDropdown: "Alege luna",
    labelNext: "Mergi la luna următoare",
    labelPrevious: "Mergi la luna anterioară",
    labelWeekNumber: (weekNumber: number) => `Săptămâna ${weekNumber}`,
    labelYearDropdown: "Alege anul",
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
        label = `Astăzi, ${label}`;
      }
      return label;
    },
    labelNav: "Bară de navigare",
    labelWeekNumberHeader: "Numărul săptămânii",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
