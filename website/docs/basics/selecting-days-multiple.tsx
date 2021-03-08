import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  const defaultSelected: Date[] = [];
  const [days, setDays] = useState(defaultSelected);

  const footer =
    days.length > 0
      ? `You picked ${days.map((day) => format(day, 'PPP')).join(', ')}`
      : `Please pick one or more days.`;

  return <DayPicker mode="multiple" onSelect={setDays} footer={footer} />;
}
