import { tr as dateFnsTr } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Turkish locale extended with DayPicker-specific translations. */
export const tr: DayPickerLocale = {
  ...dateFnsTr,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Bugün, ${label}`;
      if (modifiers.selected) label = `${label}, seçili`;
      return label;
    },
    labelMonthDropdown: "Ayı seçin",
    labelNext: "Sonraki aya git",
    labelPrevious: "Önceki aya git",
    labelWeekNumber: (weekNumber: number) => `Hafta ${weekNumber}`,
    labelYearDropdown: "Yılı seçin",
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
        label = `Bugün, ${label}`;
      }
      return label;
    },
    labelNav: "Gezinme çubuğu",
    labelWeekNumberHeader: "Hafta numarası",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
