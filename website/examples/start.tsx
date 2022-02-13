import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();

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
