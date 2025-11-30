import { sk as dateFnsSk } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Slovak locale extended with DayPicker-specific translations.
 */
export const sk: DayPickerLocale = {
  ...dateFnsSk,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Dnes, ${label}`;
      if (modifiers.selected) label = `${label}, vybraté`;
      return label;
    },
    labelMonthDropdown: "Vyberte mesiac",
    labelNext: "Prejsť na ďalší mesiac",
    labelPrevious: "Prejsť na predchádzajúci mesiac",
    labelWeekNumber: (weekNumber: number) => `Týždeň ${weekNumber}`,
    labelYearDropdown: "Vyberte rok",
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
        label = `Dnes, ${label}`;
      }
      return label;
    },
    labelNav: "Navigačný panel",
    labelWeekNumberHeader: "Číslo týždňa",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
