import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
