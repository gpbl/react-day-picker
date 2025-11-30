import * as dateFnsJalali from "date-fns-jalali";
import { faIR as jalaliFaIR } from "date-fns-jalali/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Persian (Iran) locale for the Jalali (Persian) calendar, extended with
 * DayPicker-specific translations.
 */
export const faIRJalali: DayPickerLocale = {
  ...jalaliFaIR,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `امروز، ${label}`;
      if (modifiers.selected) label = `${label}، انتخاب شده`;
      return label;
    },
    labelMonthDropdown: "ماه را انتخاب کنید",
    labelNext: "رفتن به ماه بعد",
    labelPrevious: "رفتن به ماه قبل",
    labelWeekNumber: (weekNumber: number) => `هفته ${weekNumber}`,
    labelYearDropdown: "سال را انتخاب کنید",
    labelGrid: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options, dateFnsJalali);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `امروز، ${label}`;
      }
      return label;
    },
    labelNav: "نوار ناوبری",
    labelWeekNumberHeader: "شماره هفته",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options, dateFnsJalali)).format(date, "cccc"),
  },
};
