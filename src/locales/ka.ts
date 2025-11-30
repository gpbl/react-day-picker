import { ka as dateFnsKa } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Georgian locale extended with DayPicker-specific translations. */
export const ka: DayPickerLocale = {
  ...dateFnsKa,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `დღეს, ${label}`;
      if (modifiers.selected) label = `${label}, მონიშნული`;
      return label;
    },
    labelMonthDropdown: "აირჩიეთ თვე",
    labelNext: "გადასვლა შემდეგ თვეზე",
    labelPrevious: "გადასვლა წინა თვეზე",
    labelWeekNumber: (weekNumber: number) => `კვირა ${weekNumber}`,
    labelYearDropdown: "აირჩიეთ წელი",
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
        label = `დღეს, ${label}`;
      }
      return label;
    },
    labelNav: "ნავიგაციის ზოლი",
    labelWeekNumberHeader: "კვირის ნომერი",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
