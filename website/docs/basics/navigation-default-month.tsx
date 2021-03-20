import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
