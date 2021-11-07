import React from 'react';
import { DayPicker } from 'react-day-picker';

export function Example() {
  const [selected, setSelected] = React.useState<Date | undefined>();

  const footer = selected
    ? `You selected ${selected.toLocaleDateString()}.`
    : 'Please pick a day.';

  return <DayPicker mode="single" onSelect={setSelected} footer={footer} />;
}
