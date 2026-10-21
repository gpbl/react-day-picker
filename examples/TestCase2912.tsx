import { DayPicker } from "@daypicker/react";
import { addYears } from "date-fns";
import React, { useState } from "react";

const today = new Date(2026, 6, 25);

/**
 * Reproduction for issue #2912
 *
 * @see https://github.com/gpbl/react-day-picker/issues/2912
 */
export function TestCase2912() {
  const [startMonth, setStartMonth] = useState(() => addYears(today, -5));
  const [endMonth, setEndMonth] = useState(() => addYears(today, 5));

  const narrowStartMonth = () => setStartMonth(addYears(today, 2));
  const narrowEndMonth = () => setEndMonth(addYears(today, -2));

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <button type="button" onClick={narrowStartMonth}>
          Update start month
        </button>
        <button type="button" onClick={narrowEndMonth}>
          Update end month
        </button>
      </div>
      <DayPicker
        today={today}
        startMonth={startMonth}
        endMonth={endMonth}
        numberOfMonths={2}
        captionLayout="dropdown"
      />
    </div>
  );
}
