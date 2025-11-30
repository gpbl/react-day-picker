import { be as dateFnsBe } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Belarusian locale extended with DayPicker-specific translations. */
export const be: DayPickerLocale = {
  ...dateFnsBe,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Сёння, ${label}`;
      if (modifiers.selected) label = `${label}, абрана`;
      return label;
    },
    labelMonthDropdown: "Абярыце месяц",
    labelNext: "Перайсці да наступнага месяца",
    labelPrevious: "Перайсці да папярэдняга месяца",
    labelWeekNumber: (weekNumber: number) => `Тыдзень ${weekNumber}`,
    labelYearDropdown: "Абярыце год",
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
        label = `Сёння, ${label}`;
      }
      return label;
    },
    labelNav: "Панэль навігацыі",
    labelWeekNumberHeader: "Нумар тыдня",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
