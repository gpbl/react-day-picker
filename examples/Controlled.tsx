import { addMonths, isSameMonth } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = React.useState<Date>(nextMonth);

  return (
    <div>
      <DayPicker month={month} onMonthChange={setMonth} />
      <button
        type="button"
        style={{ all: "unset", cursor: "pointer", color: "blue" }}
        disabled={isSameMonth(today, month)}
        onClick={() => setMonth(today)}
      >
        Go to Today
      </button>
    </div>
  );
}
