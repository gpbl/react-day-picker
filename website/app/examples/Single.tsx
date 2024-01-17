import { useState } from 'react';

import { DayPicker } from 'react-day-picker';

export function Single() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
  );
}
