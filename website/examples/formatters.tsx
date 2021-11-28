import React from 'react';
import { DateFormatter, DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

const seasonEmoji = {
  winter: '⛄️',
  spring: '🌸',
  summer: '🌻',
  autumn: '🍂'
};

const getSeason = (month: Date): string => {
  const monthNumber = month.getMonth();
  if (monthNumber >= 0 && monthNumber < 3) return 'winter';
  if (monthNumber >= 3 && monthNumber < 6) return 'spring';
  if (monthNumber >= 6 && monthNumber < 9) return 'summer';
  if (monthNumber >= 9 && monthNumber < 12) return 'autumn';
};

const formatCaption: DateFormatter = (month, { locale }) => {
  const season = getSeason(month);
  return (
    <>
      <span role="img" aria-label={season}>
        {seasonEmoji[season]}
      </span>{' '}
      {format(month, 'LLLL', { locale })}
    </>
  );
};

export default function App() {
  return (
    <DayPicker
      fromYear={2020}
      toYear={2025}
      formatters={{ formatCaption }}
    />
  );
}
