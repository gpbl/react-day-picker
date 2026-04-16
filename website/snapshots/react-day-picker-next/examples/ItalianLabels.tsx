// @ts-nocheck
import { format } from "date-fns";
import React from "react";
import { DayPicker } from "../dist/esm/index.js";
import { it } from "../dist/esm/locale.js";

export function ItalianLabels() {
  return (
    <DayPicker
      locale={it}
      labels={{
        labelDayButton: (date, { today, selected }) => {
          let label = format(date, "PPPP", { locale: it });
          if (today) label = `Oggi, ${label}`;
          if (selected) label = `${label}, selezionato`;
          return label;
        },
        labelWeekNumber: (weekNumber) => `Settimana ${weekNumber}`,
        labelNext: () => "Prossimo mese",
        labelPrevious: () => "Mese precedente",
        labelMonthDropdown: () => "Seleziona il mese",
        labelYearDropdown: () => "Seleziona l'anno",
      }}
    />
  );
}
