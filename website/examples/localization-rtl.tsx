import React from 'react';
import { DayPicker } from 'react-day-picker';

import arabic from 'date-fns/locale/ar-SA';

export function Example() {
  return <DayPicker dir="rtl" locale={arabic} />;
}
