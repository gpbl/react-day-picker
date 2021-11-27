import React from 'react';
import { DayPicker } from 'react-day-picker';

import { addMonths, isSameMonth } from 'date-fns';

const today = new Date();
const nextMonth = addMonths(new Date(), 1);

export default function App() {
  const [month, setMonth] = React.useState<Date>(nextMonth);

  const footer = (
    <button
      disabled={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
    >
      Go to Today
    </button>
  );

  return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
}
