import React, { useState } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const initialFooter = 'Try clicking the today’s date.';
  const [footer, setFooter] = useState(initialFooter);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.today) {
      setFooter('You clicked the today’s date');
    } else {
      setFooter(initialFooter);
    }
  };

  return <DayPicker onDayClick={handleDayClick} footer={footer} />;
}
