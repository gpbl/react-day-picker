import * as React from "react";
import { DayPickerProps } from "types";

export interface WeekNumberProps {
  number: number;
  days: Array<Date>;
  dayPickerProps: DayPickerProps;
}

export const WeekNumber: React.FC<WeekNumberProps> = ({
  number,
  dayPickerProps
}) => {
  const { formatWeekNumber, locale, classNames, styles } = dayPickerProps;
  return (
    <span className={classNames.weekNumber} style={styles.weekNumber}>
      {formatWeekNumber(number, { locale })}
    </span>
  );
};
