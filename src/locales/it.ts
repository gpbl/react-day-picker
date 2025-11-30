import { it as dateFnsIt } from "date-fns/locale";

import type { DayPickerLocale, DateLibOptions } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Italian locale extended with DayPicker-specific translations.
 */
export const it: DayPickerLocale = {
  ...dateFnsIt,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Oggi, ${label}`;
      if (modifiers.selected) label = `${label}, selezionato`;
      return label;
    },
    labelMonthDropdown: "Scegli il mese",
    labelNext: "Vai al mese successivo",
    labelPrevious: "Vai al mese precedente",
    labelWeekNumber: (weekNumber: number) => `Settimana ${weekNumber}`,
    labelYearDropdown: "Scegli l’anno",
    labelGrid: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) =>
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
        label = `Oggi, ${label}`;
      }
      return label;
    },
    labelNav: "Barra di navigazione",
    labelWeekNumberHeader: "Numero settimana",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
