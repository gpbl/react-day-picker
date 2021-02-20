import React from 'react';
import { DayPicker } from 'react-day-picker';

import spanish from 'date-fns/locale/es';

export default function App() {
  return <DayPicker locale={spanish} />;
}
