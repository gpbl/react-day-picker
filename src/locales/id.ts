import { id as dateFnsId } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Indonesian locale extended with DayPicker-specific translations.
 */
export const id: DayPickerLocale = {
  ...dateFnsId,
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
    labelNext: "Ke bulan berikutnya",
    labelPrevious: "Ke bulan sebelumnya",
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
    labelNav: "Bilah navigasi",
    labelWeekNumberHeader: "Nomor minggu",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
