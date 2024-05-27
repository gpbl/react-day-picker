import React from "react";

import { addMonths, isSameMonth } from "date-fns";
import { DayPicker } from "./react-day-picker-v8";

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = React.useState<Date>(nextMonth);

  const footer = (
    <div>
      <button
        disabled={isSameMonth(today, month)}
        onClick={() => setMonth(today)}
      >
        Go to Today
      </button>
    </div>
  );

  return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
}
