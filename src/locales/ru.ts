import { ru as dateFnsRu } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Russian locale extended with DayPicker-specific translations.
 */
export const ru: DayPickerLocale = {
  ...dateFnsRu,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Сегодня, ${label}`;
      if (modifiers.selected) label = `${label}, выбрано`;
      return label;
    },
    labelMonthDropdown: "Выберите месяц",
    labelNext: "Перейти к следующему месяцу",
    labelPrevious: "Перейти к предыдущему месяцу",
    labelWeekNumber: (weekNumber: number) => `Неделя ${weekNumber}`,
    labelYearDropdown: "Выберите год",
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
        label = `Сегодня, ${label}`;
      }
      return label;
    },
    labelNav: "Панель навигации",
    labelWeekNumberHeader: "Номер недели",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
