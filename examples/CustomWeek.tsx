import React, { useState } from "react";

import { endOfWeek, startOfWeek } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

/** Select the whole week when the day is clicked. */
export function CustomWeek() {
  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>();

  return (
    <DayPicker
      showWeekNumber
      modifiers={{
        selected: selectedWeek
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.selected) {
          setSelectedWeek(undefined); // clear the selection if the week is already selected
          return;
        }
        setSelectedWeek({
          from: startOfWeek(day),
          to: endOfWeek(day)
        });
      }}
      footer={
        selectedWeek &&
        `Week from ${selectedWeek?.from?.toLocaleDateString()} to
            ${selectedWeek?.to?.toLocaleDateString()}`
      }
    />
  );
}
