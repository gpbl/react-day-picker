// @ts-nocheck
import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker-v10";
import { it } from "react-day-picker-v10/locale";

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
