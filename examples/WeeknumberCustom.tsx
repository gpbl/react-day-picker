import { addMonths } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const today = new Date(2021, 0, 1);

export function WeeknumberCustom() {
  return (
    <DayPicker
      defaultMonth={addMonths(today, -1)}
      weekStartsOn={6} // Saturday as first day of the week
      firstWeekContainsDate={1} // Number the first week of the year from day 1
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
