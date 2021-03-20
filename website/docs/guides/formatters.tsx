import * as React from 'react';

import { format } from 'date-fns';
import { DateFormatter, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

const seasonEmoji = {
  winter: (
    <span role="img" aria-label="A snowman">
      ⛄️
    </span>
  ),
  spring: (
    <span role="img" aria-label="A spring flower">
      🌸
    </span>
  ),
  summer: (
    <span role="img" aria-label="A summer flower">
      🌻
    </span>
  ),
  autumn: (
    <span role="img" aria-label="Autumn Leafs">
      🍂
    </span>
  )
};

export default function App() {
  // Remove year from the caption
  const formatCaption: DateFormatter = (month, { locale }) => {
    let season = '';
    if (month.getMonth() >= 0 && month.getMonth() < 3) {
      season = 'winter';
    } else if (month.getMonth() >= 3 && month.getMonth() < 6) {
      season = 'spring';
    } else if (month.getMonth() >= 6 && month.getMonth() < 9) {
      season = 'summer';
    } else if (month.getMonth() >= 9 && month.getMonth() < 12) {
      season = 'autumn';
    }

    return (
      <>
        {seasonEmoji[season]} {format(month, 'LLLL', { locale })}
      </>
    );
  };

  const formatDay: DateFormatter = (day) => {
    const date = day.getDate();
    if (date === 12 || date === 17) {
      return (
        <span role="img" aria-label="Present">
          🎁
        </span>
      );
    }
    return `${date}`;
  };

  return (
    <DayPicker
      fromYear={2020}
      toYear={2025}
      formatters={{ formatDay, formatCaption }}
    />
  );
}
