import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
export function Testcase1567() {
  const [selected, setSelected] = useState({
    from: new Date(2022, 8, 25),
    to: new Date(2022, 9, 1)
  });
  const handleChange = (range) => {
    range && setSelected(range);
  };
  return (
    <div className="App">
      <DayPicker
        mode="range"
        onSelect={handleChange}
        required
        numberOfMonths={2}
        showOutsideDays
        selected={selected}
        fromDate={new Date(2020, 5)}
      />
      <button>I should be focusable</button>
    </div>
  );
}
