import { useState } from "react";

import { addMonths, isSameMonth } from "date-fns";
import { DayPicker } from "react-day-picker";

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

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
