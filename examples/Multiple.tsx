'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useState } from 'react';

export function Multiple() {
  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[]>(initialDays);

  return (
    <DayPicker
      mode="multi"
      selected={days}
      onSelect={(dates) => setDays(dates || [])}
    />
  );
}
