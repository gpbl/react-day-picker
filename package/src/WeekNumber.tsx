import * as React from 'react';

export const WeekNumber: React.FC<ReactDayPicker.WeekNumberProps> = ({
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
