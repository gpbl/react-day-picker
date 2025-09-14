import { format } from "date-fns";
import React from "react";
import {
  DayPicker,
  type MonthCaptionProps,
  useDayPicker,
} from "react-day-picker";

function CustomMonthCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker();
  return (
    <>
      <h2>{format(props.calendarMonth.date, "MMM yyy")}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="button"
          style={{ all: "revert", cursor: "pointer" }}
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          Previous
        </button>
        <button
          type="button"
          style={{ all: "revert", cursor: "pointer" }}
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export function CustomCaption() {
  return (
    <DayPicker
      hideNavigation
      components={{
        MonthCaption: CustomMonthCaption,
      }}
    />
  );
}
