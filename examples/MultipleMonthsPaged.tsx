import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
