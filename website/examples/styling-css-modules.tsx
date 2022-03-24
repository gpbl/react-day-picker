import React from 'react';

import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();

  const classNames: ClassNames = {
    ...styles,
    head: 'custom-head'
  };
  return (
    <>
      <style>{`.custom-head { color: red }`}</style>
      <DayPicker
        mode="single"
        classNames={classNames}
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    </>
  );
}
