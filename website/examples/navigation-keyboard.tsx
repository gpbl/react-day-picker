import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function Example(props: { dir?: string }) {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker
      dir={props.dir}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}
