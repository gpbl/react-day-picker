import React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker
      showWeekNumber
      weekStartsOn={2} // Tuesday as first day of the week
      firstWeekContainsDate={4} // Number the first week of the year from day 4
      formatters={{
        // Add `W` prefix to week number
        formatWeekNumber: (weekNumber) => `W${weekNumber}`
      }}
    />
  );
}
