import { Text } from '@radix-ui/themes';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

export function Start() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div role="application">
      <DayPicker selected={selected} onSelect={setSelected} />
      <Text as="p">Picked Day: {selected.toLocaleDateString()}</Text>
    </div>
  );
}
