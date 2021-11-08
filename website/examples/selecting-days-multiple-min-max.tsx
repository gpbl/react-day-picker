import React from 'react';
import { DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';

export function Example() {
  const defaultSelected: Date[] = [
    addDays(new Date(), 1),
    addDays(new Date(), 2)
  ];
  const [days, setDays] = React.useState(defaultSelected);

  const footer =
    days.length > 0
      ? `You picked ${days.length} day(s).`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      min={2}
      max={5}
      defaultSelected={defaultSelected}
      onSelect={setDays}
      footer={footer}
    />
  );
}
