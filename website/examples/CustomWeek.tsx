import { useState } from "react";

import { endOfWeek, isSameWeek, startOfWeek } from "date-fns";

import { DateRange, DayPicker } from "./react-day-picker-v8";

/** Select the whole week when the day is clicked. */
export function CustomWeek() {
  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>();

  return (
    <DayPicker
      showWeekNumber
      modifiers={{
        // @ts-expect-error Strict mode not working
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
      onWeekNumberClick={(weekNumber, dates) => {
        if (selectedWeek?.from && isSameWeek(dates[0], selectedWeek.from)) {
          setSelectedWeek(undefined); // clear the selection if the week is already selected
          return;
        }
        setSelectedWeek({
          from: startOfWeek(dates[0]),
          to: endOfWeek(dates[dates.length - 1])
        });
      }}
      footer={
        selectedWeek && (
          <p>
            {/* @ts-expect-error Strict mode not working  */}
            Week from {selectedWeek.from.toLocaleDateString()} to
            {/* @ts-expect-error Strict mode not working  */}
            {selectedWeek.to.toLocaleDateString()}
          </p>
        )
      }
    />
  );
}
