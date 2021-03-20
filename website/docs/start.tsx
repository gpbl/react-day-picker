import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function App() {
  const [selected, setSelected] = React.useState<Date | undefined>();

  const footer = selected
    ? `You selected ${selected.toLocaleDateString()}.`
    : 'Please pick a day.';

  return <DayPicker mode="single" onSelect={setSelected} footer={footer} />;
}
