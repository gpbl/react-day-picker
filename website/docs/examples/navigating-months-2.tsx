import * as React from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

export default function App() {
  const [month, setMonth] = React.useState<Date | undefined>();
  const handleMonthChange: MonthChangeEventHandler = (month) => setMonth(month);
  return (
    <>
      <DayPicker month={month} onMonthChange={handleMonthChange} />
      <p>
        <button onClick={() => setMonth(new Date())}>Go to Today</button>
      </p>
    </>
  );
}
