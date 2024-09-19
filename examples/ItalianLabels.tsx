import React from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { it } from "react-day-picker/locale";

export function ItalianLabels() {
  return (
    <DayPicker
      locale={it}
      labels={{
        labelDayButton: (date, { today, selected }) => {
          let label = format(date, "PPPP");
          if (today) label = `Oggi, ${label}`;
          if (selected) label = `${label}, selezionato`;
          return label;
        },
        labelWeekNumber: (weekNumber) => `Settimana ${weekNumber}`,
        labelNext: () => "Prossimo mese",
        labelPrevious: () => "Mese precedente",
        labelMonthDropdown: () => "Seleziona il mese",
        labelYearDropdown: () => "Seleziona l'anno"
      }}
    />
  );
}
