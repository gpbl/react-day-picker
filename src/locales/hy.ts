import { hy as dateFnsHy } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Armenian locale extended with DayPicker-specific translations.
 */
export const hy: DayPickerLocale = {
  ...dateFnsHy,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Այսօր, ${label}`;
      if (modifiers.selected) label = `${label}, ընտրված`;
      return label;
    },
    labelMonthDropdown: "Ընտրեք ամիսը",
    labelNext: "Անցնել հաջորդ ամսին",
    labelPrevious: "Անցնել նախորդ ամսին",
    labelWeekNumber: (weekNumber: number) => `Շաբաթ ${weekNumber}`,
    labelYearDropdown: "Ընտրեք տարին",
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
        label = `Այսօր, ${label}`;
      }
      return label;
    },
    labelNav: "Նավիգացիայի վահանակ",
    labelWeekNumberHeader: "Շաբաթվա համարը",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
