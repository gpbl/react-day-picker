import React, { useState } from 'react';

import { DateRange, DayPicker } from 'react-day-picker';

/**
 * Test case for issue #1567
 *
 * @see https://github.com/gpbl/react-day-picker/issues/1567
 */
export default function App() {
  const [selected, setSelected] = useState<DateRange>({
    from: new Date(2022, 8, 25),
    to: new Date(2022, 9, 1)
  });

  return (
    <div className="App">
      <DayPicker
        mode="range"
        defaultMonth={new Date(2022, 8)}
        onSelect={setSelected}
        numberOfMonths={2}
        showOutsideDays
        selected={selected}
        fromDate={new Date(2020, 5)}
      />
      <button>I should be focusable</button>
    </div>
  );
}
