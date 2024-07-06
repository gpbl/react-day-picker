import React from "react";

import { format } from "date-fns";
import {
  type MonthCaptionProps,
  DayPicker,
  useDayPicker,
  dateLib
} from "react-day-picker";

function CustomMonthCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker();
  return (
    <h2>
      {format(props.calendarMonth.date, "MMM yyy")}
      <button
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        Previous
      </button>
      <button
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        Next
      </button>
    </h2>
  );
}

export function CustomCaption() {
  return (
    <DayPicker
      components={{
        MonthCaption: CustomMonthCaption
      }}
    />
  );
}
