import { addMonths } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const today = new Date(2021, 0, 1);
export function WeeknumberCustom() {
  return (
    <DayPicker
      defaultMonth={addMonths(today, -1)}
      weekStartsOn={6}
      firstWeekContainsDate={1}
      showWeekNumber
      labels={{
        labelWeekNumber: (weekNumber) => `Week ${weekNumber}`
      }}
      formatters={{
        formatWeekNumber: (weekNumber) => `W${weekNumber}`
      }}
    />
  );
}
