import { gl as dateFnsGl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Galician locale extended with DayPicker-specific translations. */
export const gl: DayPickerLocale = {
  ...dateFnsGl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hoxe, ${label}`;
      if (modifiers.selected) label = `${label}, seleccionado`;
      return label;
    },
    labelMonthDropdown: "Escoller o mes",
    labelNext: "Ir ao mes seguinte",
    labelPrevious: "Ir ao mes anterior",
    labelWeekNumber: (weekNumber: number) => `Semana ${weekNumber}`,
    labelYearDropdown: "Escoller o ano",
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
        label = `Hoxe, ${label}`;
      }
      return label;
    },
    labelNav: "Barra de navegación",
    labelWeekNumberHeader: "Número de semana",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
