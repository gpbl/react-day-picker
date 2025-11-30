import { bs as dateFnsBs } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Bosnian locale extended with DayPicker-specific translations.
 */
export const bs: DayPickerLocale = {
  ...dateFnsBs,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Danas, ${label}`;
      if (modifiers.selected) label = `${label}, odabrano`;
      return label;
    },
    labelMonthDropdown: "Odaberite mjesec",
    labelNext: "Idi na sljedeći mjesec",
    labelPrevious: "Idi na prethodni mjesec",
    labelWeekNumber: (weekNumber: number) => `Sedmica ${weekNumber}`,
    labelYearDropdown: "Odaberite godinu",
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
        label = `Danas, ${label}`;
      }
      return label;
    },
    labelNav: "Navigacijska traka",
    labelWeekNumberHeader: "Broj sedmice",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
