import { endOfWeek, startOfWeek } from "date-fns";
import React, { useState } from "react";
import {
  type DateRange,
  DayPicker,
  rangeIncludesDate,
} from "react-day-picker-v9";

/** Select the whole week when the day is clicked. */
export function CustomWeek() {
  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>();

  return (
    <DayPicker
      showWeekNumber
      showOutsideDays
      modifiers={{
        selected: selectedWeek,
        range_start: selectedWeek?.from,
        range_end: selectedWeek?.to,
        range_middle: (date: Date) =>
          selectedWeek ? rangeIncludesDate(selectedWeek, date, true) : false,
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.selected) {
          setSelectedWeek(undefined); // clear the selection if the week is already selected
          return;
        }
        setSelectedWeek({
          from: startOfWeek(day),
          to: endOfWeek(day),
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
