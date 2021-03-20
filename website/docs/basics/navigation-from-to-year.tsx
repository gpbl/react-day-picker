import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  return (
    <DayPicker defaultMonth={new Date(2015, 0)} fromYear={2015} toYear={2018} />
  );
}
