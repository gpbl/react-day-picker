import { uk as dateFnsUk } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Ukrainian locale extended with DayPicker-specific translations.
 */
export const uk: DayPickerLocale = {
  ...dateFnsUk,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Сьогодні, ${label}`;
      if (modifiers.selected) label = `${label}, вибрано`;
      return label;
    },
    labelMonthDropdown: "Виберіть місяць",
    labelNext: "Перейти до наступного місяця",
    labelPrevious: "Перейти до попереднього місяця",
    labelWeekNumber: (weekNumber: number) => `Тиждень ${weekNumber}`,
    labelYearDropdown: "Виберіть рік",
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
        label = `Сьогодні, ${label}`;
      }
      return label;
    },
    labelNav: "Панель навігації",
    labelWeekNumberHeader: "Номер тижня",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
