import React from 'react';
import { DateFormatter, DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  // Remove year from the caption
  const formatCaption: DateFormatter = (month, { locale }) => {
    return `${format(month, 'LLLL', { locale })}`;
  };

  // Make weekdays shorter
  const formatWeekdayName: DateFormatter = (day, { locale }) => {
    return format(day, 'E', { locale })[0];
  };

  // Add an asterisk to few dates
  const formatDay: DateFormatter = (day) => {
    const date = day.getDate();
    if (date === 12 || date === 17) {
      return `${date} *`;
    }
    return `${date}`;
  };

  return (
    <DayPicker
      fromYear={2020}
      toYear={2025}
      formatters={{ formatDay, formatCaption, formatWeekdayName }}
    />
  );
}
