import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

export function DropdownButtons() {
  return (
    <DayPicker captionLayout="dropdown-buttons" fromYear={2015} toYear={2025} />
  );
}
