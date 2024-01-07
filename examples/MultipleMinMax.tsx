import 'react-day-picker/dist/style.css';

import { useState } from 'react';

import { DayPicker } from '../src/DayPicker';

export function MultipleMinMax() {
  const [selected, setSelected] = useState<Date[]>();

  return (
    <DayPicker
      mode="multi"
      min={2}
      max={5}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
