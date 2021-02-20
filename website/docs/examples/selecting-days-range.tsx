import React, { useState } from 'react';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from 'react-day-picker';

import { addDays } from 'date-fns';

export default function App() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };
  const [range, setRange] = useState(defaultSelected);
  const handleSelect: SelectRangeEventHandler = (range) => setRange(range);

  return (
    <>
      <DayPicker
        mode="range"
        defaultSelected={defaultSelected}
        onSelectRange={handleSelect}
      />
      <p>
        You picked from {range && range.from && range.from.toLocaleDateString()}{' '}
        to {range && range.to && range.to.toLocaleDateString()}
      </p>
    </>
  );
}
