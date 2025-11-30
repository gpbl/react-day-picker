import { arSA as dateFnsArSA } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Arabic (Saudi Arabia) locale extended with DayPicker-specific translations.
 */
export const arSA: DayPickerLocale = {
  ...dateFnsArSA,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `اليوم، ${label}`;
      if (modifiers.selected) label = `${label}، محدد`;
      return label;
    },
    labelMonthDropdown: "اختر الشهر",
    labelNext: "اذهب إلى الشهر التالي",
    labelPrevious: "اذهب إلى الشهر السابق",
    labelWeekNumber: (weekNumber: number) => `الأسبوع ${weekNumber}`,
    labelYearDropdown: "اختر السنة",
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
        label = `اليوم، ${label}`;
      }
      return label;
    },
    labelNav: "شريط التنقل",
    labelWeekNumberHeader: "رقم الأسبوع",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
