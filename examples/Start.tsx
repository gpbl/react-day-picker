'use client';
import { useState } from 'react';

import { DayPicker } from 'react-day-picker';

export function Start() {
  const [selected, setSelected] = useState<Date | undefined>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
