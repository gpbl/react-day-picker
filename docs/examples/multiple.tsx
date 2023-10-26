import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[]>(initialDays);

  return (
    <DayPicker
      mode="multi"
      required
      selected={days}
      onSelect={(dates) => dates && setDays(dates)}
      footer={days && days.length > 0 && `You selected ${days.length} day(s).`}
    />
  );
}
