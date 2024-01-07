import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

export function MultipleMonths() {
  return <DayPicker numberOfMonths={2} />;
}
