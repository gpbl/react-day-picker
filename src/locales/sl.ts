import { sl as dateFnsSl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Slovene locale extended with DayPicker-specific translations.
 */
export const sl: DayPickerLocale = {
  ...dateFnsSl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Danes, ${label}`;
      if (modifiers.selected) label = `${label}, izbrano`;
      return label;
    },
    labelMonthDropdown: "Izberite mesec",
    labelNext: "Pojdi na naslednji mesec",
    labelPrevious: "Pojdi na prejšnji mesec",
    labelWeekNumber: (weekNumber: number) => `Teden ${weekNumber}`,
    labelYearDropdown: "Izberite leto",
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
        label = `Danes, ${label}`;
      }
      return label;
    },
    labelNav: "Navigacijska vrstica",
    labelWeekNumberHeader: "Številka tedna",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
