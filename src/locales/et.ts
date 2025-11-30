import { et as dateFnsEt } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Estonian locale extended with DayPicker-specific translations. */
export const et: DayPickerLocale = {
  ...dateFnsEt,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Täna, ${label}`;
      if (modifiers.selected) label = `${label}, valitud`;
      return label;
    },
    labelMonthDropdown: "Vali kuu",
    labelNext: "Mine järgmisele kuule",
    labelPrevious: "Mine eelmisele kuule",
    labelWeekNumber: (weekNumber: number) => `Nädal ${weekNumber}`,
    labelYearDropdown: "Vali aasta",
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
        label = `Täna, ${label}`;
      }
      return label;
    },
    labelNav: "Navigeerimisriba",
    labelWeekNumberHeader: "Nädala number",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
