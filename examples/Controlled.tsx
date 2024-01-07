'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { addMonths, isSameMonth } from 'date-fns';
import { useState } from 'react';

/**
 * Programmatically control the displayed month, such as creating a "Go to Today" button.
 *
 * @exampleTitle Go to Today Button
 */
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
