import { te as dateFnsTe } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Telugu locale extended with DayPicker-specific translations. */
export const te: DayPickerLocale = {
  ...dateFnsTe,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `ఈ రోజు, ${label}`;
      if (modifiers.selected) label = `${label}, ఎంచుకోబడింది`;
      return label;
    },
    labelMonthDropdown: "నెలను ఎంచుకోండి",
    labelNext: "తదుపరి నెలకు వెళ్లండి",
    labelPrevious: "మునుపటి నెలకు వెళ్లండి",
    labelWeekNumber: (weekNumber: number) => `వారం ${weekNumber}`,
    labelYearDropdown: "సంవత్సరాన్ని ఎంచుకోండి",
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
        label = `ఈ రోజు, ${label}`;
      }
      return label;
    },
    labelNav: "నావిగేషన్ పట్టీ",
    labelWeekNumberHeader: "వారం సంఖ్య",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
