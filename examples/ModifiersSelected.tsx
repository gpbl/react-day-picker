'use client';
import { subDays } from 'date-fns';
import { DayPicker, SelectHandler } from 'react-day-picker';

export function ModifiersSelected() {
  const yesterday = subDays(new Date(), 1);
  const handleSelect: SelectHandler<'single'> = (value, date, modifiers) => {
    if (modifiers.selected) {
      alert('You clicked a selected day.');
    }
    if (modifiers.today) {
      alert('You clicked today');
    }
  };
  return (
    <DayPicker mode="single" selected={yesterday} onSelect={handleSelect} />
  );
}
