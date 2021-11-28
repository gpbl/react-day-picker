import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function Example({ dir = 'ltr' }) {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker
      dir={dir}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}
