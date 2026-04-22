import { hr as dateFnsHr } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Croatian locale extended with DayPicker-specific translations. */
export const hr: DayPickerLocale = {
  ...dateFnsHr,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Danas, ${label}`;
      if (modifiers.selected) label = `${label}, odabrano`;
      return label;
    },
    labelMonthDropdown: "Odaberite mjesec",
    labelNext: "Prijeđi na sljedeći mjesec",
    labelPrevious: "Prijeđi na prethodni mjesec",
    labelWeekNumber: (weekNumber: number) => `Tjedan ${weekNumber}`,
    labelYearDropdown: "Odaberite godinu",
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
        label = `Danas, ${label}`;
      }
      return label;
    },
    labelNav: "Navigacijska traka",
    labelWeekNumberHeader: "Broj tjedna",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
