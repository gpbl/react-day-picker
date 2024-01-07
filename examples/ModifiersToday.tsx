import 'react-day-picker/dist/style.css';

import { useState } from 'react';

import { DayMouseEventHandler, DayPicker } from 'react-day-picker';

export function ModifiersToday() {
  const initialFooter = <p>Try clicking the today’s date.</p>;
  const [footer, setFooter] = useState(initialFooter);

  const handleDayClick: DayMouseEventHandler = (day, { today }) => {
    if (today) {
      setFooter(<p>You clicked the today’s date.</p>);
    } else {
      setFooter(initialFooter);
    }
  };

  return <DayPicker onDayClick={handleDayClick} footer={footer} />;
}
