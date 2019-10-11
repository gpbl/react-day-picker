import * as React from 'react';
import { getUnixTime } from 'date-fns';
import { DayPickerProps } from '../types/DayPickerProps';
import { DateWithModifiers } from '../classes';

interface Week {
  weekNumber: number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}

export const Week: React.FC<Week> = props => {
  const { weekNumber, week, dayPickerProps } = props;
  const { showWeekNumber, classNames, styles, components } = dayPickerProps;
  const { Day, WeekNumber } = components;
  return (
    <tr className={classNames.week} style={styles.week}>
      {showWeekNumber && (
        <th
          className={classNames.weekNumberContainer}
          style={styles.weekNumberContainer}
        >
          <WeekNumber
            days={week}
            number={weekNumber}
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
