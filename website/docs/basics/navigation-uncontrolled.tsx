import * as React from 'react';

import { addMonths, isSameMonth } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

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
