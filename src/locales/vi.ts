import { vi as dateFnsVi } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Vietnamese locale extended with DayPicker-specific translations. */
export const vi: DayPickerLocale = {
  ...dateFnsVi,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hôm nay, ${label}`;
      if (modifiers.selected) label = `${label}, đã chọn`;
      return label;
    },
    labelMonthDropdown: "Chọn tháng",
    labelNext: "Đến tháng tiếp theo",
    labelPrevious: "Đến tháng trước",
    labelWeekNumber: (weekNumber: number) => `Tuần ${weekNumber}`,
    labelYearDropdown: "Chọn năm",
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
        label = `Hôm nay, ${label}`;
      }
      return label;
    },
    labelNav: "Thanh điều hướng",
    labelWeekNumberHeader: "Số tuần",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
