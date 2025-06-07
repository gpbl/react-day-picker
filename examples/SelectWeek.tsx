import React from "react";

import { DayPicker, useDayPicker, WeekNumberProps } from "react-day-picker";

function WeekNumber({ week, ...thProps }: WeekNumberProps) {
  const { setSelected } = useDayPicker<{ mode: "range" }>();
  const selectWeek = () => {
    const start = week.days.at(0)?.date;
    const end = week.days.at(-1)?.date;
    if (start && end) {
      setSelected({ from: start, to: end });
    }
  };
  return (
    <th
      {...thProps}
      onClick={selectWeek}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectWeek();
        }
      }}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
      aria-label={`Select week ${week.weekNumber}`}
    >
      {week.weekNumber}
    </th>
  );
}

export function SelectWeek() {
  return (
    <DayPicker
      mode="range"
      showWeekNumber
      showOutsideDays
      components={{ WeekNumber }}
    />
  );
}
