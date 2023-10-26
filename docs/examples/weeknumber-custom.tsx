import { DayPicker } from 'react-day-picker';

import { startOfYear } from 'date-fns';

export default function App() {
  return (
    <DayPicker
      defaultMonth={startOfYear(new Date())}
      weekStartsOn={6} // Saturday as first day of the week
      firstWeekContainsDate={4} // Number the first week of the year from day 4
      showWeekNumber
      labels={{
        labelWeekNumber: (weekNumber: number) => `Week ${weekNumber}`
      }}
      formatters={{
        // Add `W` prefix to week number
        formatWeekNumber: (weekNumber: number) => `W${weekNumber}`
      }}
    />
  );
}
