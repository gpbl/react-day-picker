import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';
import { useState } from 'react';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
      footer={selectedDay ? `You selected ${format(selectedDay, 'PPP')}` : ''}
    />
  );
}
