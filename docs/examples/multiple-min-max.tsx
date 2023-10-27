import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
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
