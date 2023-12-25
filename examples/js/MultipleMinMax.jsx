import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export function MultipleMinMax() {
  const [selected, setSelected] = useState();
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
