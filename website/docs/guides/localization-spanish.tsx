import * as React from 'react';

import es from 'date-fns/locale/es';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function App() {
  return <DayPicker locale={es} />;
}
