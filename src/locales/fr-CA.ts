import { frCA as dateFnsFrCA } from "date-fns/locale";

import type { DayPickerLocale, DateLibOptions } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * French (Canada) locale extended with DayPicker-specific translations.
 */
export const frCA: DayPickerLocale = {
  ...dateFnsFrCA,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Aujourd'hui, ${label}`;
      if (modifiers.selected) label = `${label}, sélectionné`;
      return label;
    },
    labelMonthDropdown: "Choisir le mois",
    labelNext: "Aller au mois suivant",
    labelPrevious: "Aller au mois précédent",
    labelWeekNumber: (weekNumber: number) => `Semaine ${weekNumber}`,
    labelYearDropdown: "Choisir l'année",
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
        label = `Aujourd'hui, ${label}`;
      }
      return label;
    },
    labelNav: "Barre de navigation",
    labelWeekNumberHeader: "Numéro de semaine",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
