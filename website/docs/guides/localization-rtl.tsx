import * as React from 'react';

import arabic from 'date-fns/locale/ar-SA';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function App() {
  return <DayPicker dir="rtl" locale={arabic} />;
}
