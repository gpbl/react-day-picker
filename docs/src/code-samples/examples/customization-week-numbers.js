import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {
  return (
    <DayPicker
      showWeekNumbers
      onWeekClick={(week, days) => console.log(week, days)}
      onWeekMouseEnter={(week, days) => console.log(week, days)}
      onWeekMouseLeave={(week, days) => console.log(week, days)}
    />
  );
}
