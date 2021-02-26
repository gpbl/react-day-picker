import * as React from 'react';
import { Day, DayPicker, SelectEventHandler } from 'react-day-picker';

export default function App() {
  const [selected, setSelected] = React.useState<Date | undefined>();

  const handleSelect: SelectEventHandler = (day) => {
    setSelected(day);
  };

  return (
    <DayPicker
      onSelect={handleSelect}
      footer={selected && <p>You selected {selected.toLocaleDateString()}</p>}
    />
  );
}
