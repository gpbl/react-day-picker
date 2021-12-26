import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function Example() {
  const [selected, setSelected] = useState<Date>();

  let footer = 'Please pick a day.';
  if (selected) {
    footer = `You picked ${format(selected, 'PP')}.`;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
