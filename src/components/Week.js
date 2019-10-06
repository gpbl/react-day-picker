import React from 'react';
import PropTypes from 'prop-types';
import { getUnixTime } from 'date-fns';

import Day from './Day';

function Week({ weekNumber, week, dayPickerProps }) {
  const { showWeekNumber, classNames, styles } = dayPickerProps;
  return (
    <tr className={classNames.week} style={styles.week}>
      {showWeekNumber && (
        <th className={classNames.weekNumber} style={styles.weekNumber}>
          {weekNumber}
        </th>
      )}
      {week.map(day => (
        <td
          className={classNames.weekDay}
          style={styles.weekDay}
          key={getUnixTime(day)}
        >
          <Day
            key={getUnixTime(day)}
            day={day}
            dayPickerProps={dayPickerProps}
          />
        </td>
      ))}
    </tr>
  );
}

Week.propTypes = {
  weekNumber: PropTypes.string.isRequired,
  week: PropTypes.array.isRequired,
  dayPickerProps: PropTypes.shape({
    locale: PropTypes.object.isRequired,
    showWeekNumber: PropTypes.bool,
    showOutsideDays: PropTypes.bool,
    styles: PropTypes.shape({
      week: PropTypes.string,
      weekNumber: PropTypes.string,
      weekDay: PropTypes.string,
    }),
    classNames: PropTypes.shape({
      week: PropTypes.string,
      weekNumber: PropTypes.string,
      weekDay: PropTypes.string,
    }),
  }).isRequired,
};

export default Week;
