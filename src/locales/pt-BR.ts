import { ptBR as dateFnsPtBR } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Portuguese (Brazil) locale extended with DayPicker-specific translations. */
export const ptBR: DayPickerLocale = {
  ...dateFnsPtBR,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Hoje, ${label}`;
      if (modifiers.selected) label = `${label}, selecionado`;
      return label;
    },
    labelMonthDropdown: "Escolha o mês",
    labelNext: "Ir para o próximo mês",
    labelPrevious: "Ir para o mês anterior",
    labelWeekNumber: (weekNumber: number) => `Semana ${weekNumber}`,
    labelYearDropdown: "Escolha o ano",
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
        label = `Hoje, ${label}`;
      }
      return label;
    },
    labelNav: "Barra de navegação",
    labelWeekNumberHeader: "Número da semana",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
