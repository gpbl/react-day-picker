import * as React from 'react';
import { getUnixTime } from 'date-fns';
import { DayPickerProps } from 'types/props';
import { DateWithModifiers } from 'classes';

interface Week {
  weekNumber: Number;
  week: DateWithModifiers[];
  dayPickerProps: DayPickerProps;
}

export const Week: React.FC<Week> = props => {
  const { weekNumber, week, dayPickerProps } = props;
  const {
    showWeekNumber,
    classNames,
    styles,
    locale,
    formatWeekNumber,
    components: { Day },
  } = dayPickerProps;
  return (
    <tr className={classNames.week} style={styles.week}>
      {showWeekNumber && (
        <th className={classNames.weekNumber} style={styles.weekNumber}>
          {formatWeekNumber(Number(weekNumber), { locale })}
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
