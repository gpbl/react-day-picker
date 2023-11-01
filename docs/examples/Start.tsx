import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function Start() {
  const [selected, setSelected] = useState<Date | undefined>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
