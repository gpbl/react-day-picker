import * as React from 'react';
import { Day, DayPicker, SelectEventHandler } from 'react-day-picker';

export default function App() {
  const [selected, setSelected] = React.useState<Date | undefined>();

  const handleSelect: SelectEventHandler = (day) => {
    setSelected(day);
  };

  const footer = selected
    ? `You selected ${selected.toLocaleDateString()}.`
    : 'Please pick a day.';

  return <DayPicker onSelect={handleSelect} footer={footer} />;
}
