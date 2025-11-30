import { ms as dateFnsMs } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Malay locale extended with DayPicker-specific translations.
 */
export const ms: DayPickerLocale = {
  ...dateFnsMs,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hari ini, ${label}`;
      if (modifiers.selected) label = `${label}, dipilih`;
      return label;
    },
    labelMonthDropdown: "Pilih bulan",
    labelNext: "Pergi ke bulan seterusnya",
    labelPrevious: "Pergi ke bulan sebelumnya",
    labelWeekNumber: (weekNumber: number) => `Minggu ${weekNumber}`,
    labelYearDropdown: "Pilih tahun",
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
        label = `Hari ini, ${label}`;
      }
      return label;
    },
    labelNav: "Bar navigasi",
    labelWeekNumberHeader: "Nombor minggu",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
