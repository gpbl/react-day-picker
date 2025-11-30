import { srLatn as dateFnsSrLatn } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Serbian (Latin) locale extended with DayPicker-specific translations. */
export const srLatn: DayPickerLocale = {
  ...dateFnsSrLatn,
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
      if (modifiers.selected) label = `${label}, izabrano`;
      return label;
    },
    labelMonthDropdown: "Izaberite mesec",
    labelNext: "Idite na sledeći mesec",
    labelPrevious: "Idite na prethodni mesec",
    labelWeekNumber: (weekNumber: number) => `Nedelja ${weekNumber}`,
    labelYearDropdown: "Izaberite godinu",
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
    labelNav: "Navigaciona traka",
    labelWeekNumberHeader: "Broj nedelje",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
