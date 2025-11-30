import { sr as dateFnsSr } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Serbian (Cyrillic) locale extended with DayPicker-specific translations.
 */
export const sr: DayPickerLocale = {
  ...dateFnsSr,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Данас, ${label}`;
      if (modifiers.selected) label = `${label}, изабрано`;
      return label;
    },
    labelMonthDropdown: "Изаберите месец",
    labelNext: "Идите на следећи месец",
    labelPrevious: "Идите на претходни месец",
    labelWeekNumber: (weekNumber: number) => `Недеља ${weekNumber}`,
    labelYearDropdown: "Изаберите годину",
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
        label = `Данас, ${label}`;
      }
      return label;
    },
    labelNav: "Навигациона трака",
    labelWeekNumberHeader: "Број недеље",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
