import 'react-day-picker/style.css';

import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
