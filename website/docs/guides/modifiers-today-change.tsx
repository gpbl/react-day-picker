import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function App() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
