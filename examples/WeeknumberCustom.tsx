/* eslint-disable no-console */
import React from "react";

import { addMonths } from "date-fns";
import { DayPicker, WeekNumberProps } from "react-day-picker";

const today = new Date(2021, 0, 1);

export function WeeknumberCustom() {
  return (
    <DayPicker
      showWeekNumber
      defaultMonth={addMonths(today, -1)}
      components={{
        WeekNumber: ({ week, ...props }: WeekNumberProps) => (
          <th {...props}>
            <button onClick={() => console.log(week)}>{props.children}</button>
          </th>
        )
      }}
      labels={{
        labelWeekNumber: (weekNumber: number) => `W${weekNumber}`
      }}
      formatters={{
        formatWeekNumber: (weekNumber: number) => `W${weekNumber}`
      }}
    />
  );
}
