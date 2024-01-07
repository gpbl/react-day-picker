import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
