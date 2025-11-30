import { jaHira as dateFnsJaHira } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Japanese (Hiragana) locale extended with DayPicker-specific translations. */
export const jaHira: DayPickerLocale = {
  ...dateFnsJaHira,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `きょう、${label}`;
      if (modifiers.selected) label = `${label}、せんたくずみ`;
      return label;
    },
    labelMonthDropdown: "つきをえらぶ",
    labelNext: "つぎのつきへ",
    labelPrevious: "まえのつきへ",
    labelWeekNumber: (weekNumber: number) => `しゅう ${weekNumber}`,
    labelYearDropdown: "としをえらぶ",
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
        label = `きょう、${label}`;
      }
      return label;
    },
    labelNav: "ナビゲーションバー",
    labelWeekNumberHeader: "しゅうばんごう",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
