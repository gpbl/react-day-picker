import { beTarask as dateFnsBeTarask } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Belarusian (Taraskievica) locale extended with DayPicker-specific translations.
 */
export const beTarask: DayPickerLocale = {
  ...dateFnsBeTarask,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Сёньня, ${label}`;
      if (modifiers.selected) label = `${label}, абрана`;
      return label;
    },
    labelMonthDropdown: "Выберыце месяц",
    labelNext: "Перайсьці да наступнага месяца",
    labelPrevious: "Перайсьці да папярэдняга месяца",
    labelWeekNumber: (weekNumber: number) => `Тыдзень ${weekNumber}`,
    labelYearDropdown: "Выберыце год",
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
        label = `Сёньня, ${label}`;
      }
      return label;
    },
    labelNav: "Панэль навігацыі",
    labelWeekNumberHeader: "Нумар тыдня",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
