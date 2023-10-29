import { DayPicker } from 'react-day-picker';

import { addMonths, isSameMonth } from 'date-fns';
import { useState } from 'react';

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

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
