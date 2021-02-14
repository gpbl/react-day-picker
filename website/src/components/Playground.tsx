import * as React from 'react';
import { DayPicker } from 'react-day-picker';

export function Playground() {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker onDayClick={setSelected} selected={selected} showOutsideDays />
  );
}
