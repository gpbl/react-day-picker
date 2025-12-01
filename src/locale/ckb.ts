import { ckb as dateFnsCkb } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Central Kurdish (Sorani) locale extended with DayPicker-specific
 * translations.
 */
export const ckb: DayPickerLocale = {
  ...dateFnsCkb,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `ئەمڕۆ، ${label}`;
      if (modifiers.selected) label = `${label}، هەڵبژێرا`;
      return label;
    },
    labelMonthDropdown: "مانگ هەڵبژێرە",
    labelNext: "بڕۆ بۆ مانگی داهاتوو",
    labelPrevious: "بڕۆ بۆ مانگی پێشوو",
    labelWeekNumber: (weekNumber: number) => `هەفتە ${weekNumber}`,
    labelYearDropdown: "ساڵ هەڵبژێرە",
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
        label = `ئەمڕۆ، ${label}`;
      }
      return label;
    },
    labelNav: "شریتی ڕاڕەوێژ",
    labelWeekNumberHeader: "ژمارەی هەفتە",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
