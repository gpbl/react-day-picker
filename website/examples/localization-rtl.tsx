import React from 'react';
import { DayPicker } from 'react-day-picker';

import arabic from 'date-fns/locale/ar-SA';

export default function App() {
  return <DayPicker dir="rtl" locale={arabic} mode="single" />;
}
