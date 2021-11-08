import React from 'react';
import { DayPicker } from 'react-day-picker';

export function Example() {
  const defaultSelected: Date[] = [];
  const [days, setDays] = React.useState(defaultSelected);

  const footer =
    days.length > 0
      ? `You picked ${days.length} day(s).`
      : `Please pick one or more days.`;

  return <DayPicker mode="multiple" onSelect={setDays} footer={footer} />;
}
