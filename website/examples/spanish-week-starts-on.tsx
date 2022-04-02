import React from 'react';

import es from 'date-fns/locale/es';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
