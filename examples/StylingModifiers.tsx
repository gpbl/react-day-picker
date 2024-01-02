import { DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';
import customStyles from './styles/styling-modifiers.module.css';

const today = new Date();
const beforeYesterday = addDays(today, -2);

export function StylingModifiers() {
  return (
    <DayPicker
      mode="single"
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
