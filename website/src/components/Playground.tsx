import * as React from 'react';
import { DayPicker } from 'react-day-picker';

export function Playground() {
  const [selected, setSelected] = React.useState<Date>();
  const handleDayClick = (day) => setSelected(day);
  const fromDate = new Date(2020, 0);
  const toDate = new Date(2021, 11);
  return (
    <>
      <h3>Selecting</h3>
      <DayPicker
        navigationType="dropdown"
        onDayClick={handleDayClick}
        selected={selected}
        fromDate={fromDate}
        toDate={toDate}
        numberOfMonths={3}
      />
    </>
  );
}
