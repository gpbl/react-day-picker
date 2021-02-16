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
        dropdownNavigation
        onDayClick={handleDayClick}
        selected={selected}
        fromDate={fromDate}
        toDate={toDate}
      />
      <h2>Multiple months</h2>
      {/* <DayPicker
        onDayClick={handleDayClick}
        selected={selected}
        fromDate={fromDate}
        toDate={toDate}
        showWeekNumber
        numberOfMonths={2}
      />
      <h3>With paged navigation</h3>
      <DayPicker
        onDayClick={handleDayClick}
        selected={selected}
        fromDate={fromDate}
        toDate={toDate}
        showWeekNumber
        numberOfMonths={2}
        pagedNavigation
      /> */}
    </>
  );
}
