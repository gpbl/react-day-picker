import React from 'react';

import { DayPicker } from 'react-day-picker';
import * as classNames from 'react-day-picker/style.module.css';

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();

  return (
    <>
      <style>{`.custom-head { color: red }`}</style>
      <DayPicker
        mode="single"
        classNames={{
          ...classNames,
          head: 'custom-head'
        }}
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    </>
  );
}
