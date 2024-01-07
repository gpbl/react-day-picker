import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

export function MultipleMonthsId() {
  return <DayPicker numberOfMonths={2} id="calendar_example" />;
}
