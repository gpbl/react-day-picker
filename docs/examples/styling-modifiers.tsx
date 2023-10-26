import { DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';
import customStyles from './styling-modifiers.module.css';

const today = new Date();
const beforeYesterday = addDays(today, -2);

export default function App() {
  return (
    <DayPicker
      selected={new Date()}
      disabled={beforeYesterday}
      modifiersClassNames={{
        selected: customStyles.purpleToday
      }}
      modifiersStyles={{
        disabled: {
          // Add a line-through style to the disabled days
          textDecoration: 'line-through'
        }
      }}
    />
  );
}
