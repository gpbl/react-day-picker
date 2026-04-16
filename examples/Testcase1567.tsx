import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker";

/**
 * Test case for issue #1567
 *
 * @see https://github.com/gpbl/react-day-picker/issues/1567
 */
export function TestCase1567() {
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: new Date(2022, 8, 25),
    to: new Date(2022, 9, 1),
  });

  const handleChange = (range: DateRange | undefined) => {
    if (range) setSelected(range);
  };
  return (
    <div className="App">
      <DayPicker
        mode="range"
        onSelect={handleChange}
        numberOfMonths={2}
        showOutsideDays
        selected={selected}
        fromMonth={new Date(2020, 5)}
      />
      <button type="button">I should be focusable</button>
    </div>
  );
}
