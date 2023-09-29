import React, { ReactNode } from 'react';
import { useDayPicker } from 'contexts/DayPicker';

export interface MonthsProps {
  children: ReactNode;
}

export function Months({ children }: MonthsProps): JSX.Element {
  const dayPicker = useDayPicker();

  return (
    <div
      className={dayPicker.classNames.months}
      style={dayPicker.styles.months}
    >
      {children}
    </div>
  );
}
