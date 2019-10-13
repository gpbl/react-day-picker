import * as React from 'react';
import { WeekNumberProps } from '../typings/react-day-picker';
export const WeekNumber: React.FC<WeekNumberProps> = ({
  number,
  dayPickerProps,
}) => {
  const { formatWeekNumber, locale, classNames, styles } = dayPickerProps;
  return (
    <span className={classNames.weekNumber} style={styles.weekNumber}>
      {formatWeekNumber(number, { locale })}
    </span>
  );
};
