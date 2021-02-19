import * as React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const [selected, setSelected] = React.useState<Date | undefined>();

  const handleDayClick: DayClickEventHandler = (day, { selected }) => {
    if (!selected) setSelected(day);
    else setSelected(undefined);
  };

  return <DayPicker selected={selected} onDayClick={handleDayClick} />;
}
