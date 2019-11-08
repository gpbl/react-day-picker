import * as React from 'react';
import { getUnixTime } from 'date-fns';
import { DayPickerProps } from 'types';
import { DateWithModifiers } from 'classes';

export interface WeekProps {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}

export const Week: React.FC<WeekProps> = props => {
  const { weekNumber, week, dayPickerProps } = props;
  const { showWeekNumber, classNames, styles, components } = dayPickerProps;
  const { Day, WeekNumber } = components;
  return (
    <tr className={classNames.week} style={styles.week}>
      {showWeekNumber && (
        <th className={classNames.weekWeeknumber} style={styles.weekWeeknumber}>
          <WeekNumber
            days={week.map(day => day.date)}
            number={Number(weekNumber)}
            dayPickerProps={dayPickerProps}
          />
        </th>
      )}
      {week.map(day => (
        <td
          className={classNames.weekDay}
          style={styles.weekDay}
          key={getUnixTime(day.date)}
        >
          <Day
            day={day.date}
            modifiers={day.modifiers}
            dayPickerProps={dayPickerProps}
          />
        </td>
      ))}
    </tr>
  );
};
