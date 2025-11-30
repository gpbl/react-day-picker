import { th as dateFnsTh } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Thai locale extended with DayPicker-specific translations. */
export const th: DayPickerLocale = {
  ...dateFnsTh,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `วันนี้, ${label}`;
      if (modifiers.selected) label = `${label}, เลือกแล้ว`;
      return label;
    },
    labelMonthDropdown: "เลือกเดือน",
    labelNext: "ไปเดือนถัดไป",
    labelPrevious: "ไปเดือนก่อนหน้า",
    labelWeekNumber: (weekNumber: number) => `สัปดาห์ ${weekNumber}`,
    labelYearDropdown: "เลือกปี",
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
        label = `วันนี้, ${label}`;
      }
      return label;
    },
    labelNav: "แถบนำทาง",
    labelWeekNumberHeader: "หมายเลขสัปดาห์",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
