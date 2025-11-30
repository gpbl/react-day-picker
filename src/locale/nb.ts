import { nb as dateFnsNb } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Norwegian Bokmål locale extended with DayPicker-specific translations. */
export const nb: DayPickerLocale = {
  ...dateFnsNb,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `I dag, ${label}`;
      if (modifiers.selected) label = `${label}, valgt`;
      return label;
    },
    labelMonthDropdown: "Velg måned",
    labelNext: "Gå til neste måned",
    labelPrevious: "Gå til forrige måned",
    labelWeekNumber: (weekNumber: number) => `Uke ${weekNumber}`,
    labelYearDropdown: "Velg år",
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
        label = `I dag, ${label}`;
      }
      return label;
    },
    labelNav: "Navigasjonslinje",
    labelWeekNumberHeader: "Ukenummer",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
