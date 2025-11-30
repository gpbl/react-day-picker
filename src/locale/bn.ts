import { bn as dateFnsBn } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Bengali locale extended with DayPicker-specific translations. */
export const bn: DayPickerLocale = {
  ...dateFnsBn,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `আজ, ${label}`;
      if (modifiers.selected) label = `${label}, নির্বাচিত`;
      return label;
    },
    labelMonthDropdown: "মাস নির্বাচন করুন",
    labelNext: "পরবর্তী মাসে যান",
    labelPrevious: "পূর্ববর্তী মাসে যান",
    labelWeekNumber: (weekNumber: number) => `সপ্তাহ ${weekNumber}`,
    labelYearDropdown: "বছর নির্বাচন করুন",
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
        label = `আজ, ${label}`;
      }
      return label;
    },
    labelNav: "নেভিগেশন বার",
    labelWeekNumberHeader: "সপ্তাহ নম্বর",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
