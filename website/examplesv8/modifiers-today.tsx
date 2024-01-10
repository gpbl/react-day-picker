import React, { useState } from 'react';

import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const initialFooter = <p>Try clicking today’s date.</p>;
  const [footer, setFooter] = useState(initialFooter);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.today) {
      setFooter(<p>You clicked today’s date.</p>);
    } else {
      setFooter(initialFooter);
    }
  };

  return <DayPicker onDayClick={handleDayClick} footer={footer} />;
}
