import { useState } from 'react';
import { DateRange, DayPicker, SelectHandler } from 'react-day-picker';

/**
 * Test case for issue #1567
 *
 * @see https://github.com/gpbl/react-day-picker/issues/1567
 */
export function Testcase1567() {
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: new Date(2022, 8, 25),
    to: new Date(2022, 9, 1)
  });

  const handleChange: SelectHandler<'range'> = (
    range: DateRange | undefined
  ) => {
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
