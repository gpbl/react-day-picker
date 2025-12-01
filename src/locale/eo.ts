import { eo as dateFnsEo } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Esperanto locale extended with DayPicker-specific translations. */
export const eo: DayPickerLocale = {
  ...dateFnsEo,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hodiaŭ, ${label}`;
      if (modifiers.selected) label = `${label}, elektita`;
      return label;
    },
    labelMonthDropdown: "Elektu la monaton",
    labelNext: "Iru al la sekva monato",
    labelPrevious: "Iru al la antaŭa monato",
    labelWeekNumber: (weekNumber: number) => `Semajno ${weekNumber}`,
    labelYearDropdown: "Elektu la jaron",
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
        label = `Hodiaŭ, ${label}`;
      }
      return label;
    },
    labelNav: "Naviga breto",
    labelWeekNumberHeader: "Semajna numero",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
