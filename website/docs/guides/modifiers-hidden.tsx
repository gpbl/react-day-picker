import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const hiddenDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 20),
    new Date(2022, 5, 11)
  ];

  return <DayPicker defaultMonth={new Date(2022, 5)} hidden={hiddenDays} />;
}
