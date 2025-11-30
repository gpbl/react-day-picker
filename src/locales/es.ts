import { es as dateFnsEs } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Spanish locale extended with DayPicker-specific translations. */
export const es: DayPickerLocale = {
  ...dateFnsEs,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hoy, ${label}`;
      if (modifiers.selected) label = `${label}, seleccionado`;
      return label;
    },
    labelMonthDropdown: "Elegir el mes",
    labelNext: "Ir al mes siguiente",
    labelPrevious: "Ir al mes anterior",
    labelWeekNumber: (weekNumber: number) => `Semana ${weekNumber}`,
    labelYearDropdown: "Elegir el año",
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
        label = `Hoy, ${label}`;
      }
      return label;
    },
    labelNav: "Barra de navegación",
    labelWeekNumberHeader: "Número de semana",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
