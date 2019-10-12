import * as React from 'react';
import { startOfMonth } from 'date-fns';
import { DayPicker } from './DayPicker';
import { DayPickerProps } from '../types/DayPicker';

export function DayPickerControlled({
  initialMonth = new Date(),
  ...props
}: DayPickerProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(initialMonth || new Date())
  );

  function handleMonthChange(month: Date, e: React.MouseEvent) {
    setCurrentMonth(month);
    if (props.onMonthChange) {
      props.onMonthChange(month, e);
    }
  }

  return (
    <DayPicker
      {...props}
      onMonthChange={handleMonthChange}
      month={currentMonth}
    />
  );
}
