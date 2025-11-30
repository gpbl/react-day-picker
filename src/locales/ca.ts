import { ca as dateFnsCa } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Catalan locale extended with DayPicker-specific translations.
 */
export const ca: DayPickerLocale = {
  ...dateFnsCa,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Avui, ${label}`;
      if (modifiers.selected) label = `${label}, seleccionat`;
      return label;
    },
    labelMonthDropdown: "Tria el mes",
    labelNext: "Ves al mes següent",
    labelPrevious: "Ves al mes anterior",
    labelWeekNumber: (weekNumber: number) => `Setmana ${weekNumber}`,
    labelYearDropdown: "Tria l'any",
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
        label = `Avui, ${label}`;
      }
      return label;
    },
    labelNav: "Barra de navegació",
    labelWeekNumberHeader: "Número de setmana",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
