import React from 'react';
import PropTypes from 'prop-types';
import { getUnixTime } from 'date-fns';

function Week({ weekNumber, week, dayPickerProps }) {
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
          key={getUnixTime(day)}
        >
          <Day
            key={getUnixTime(day)}
            day={day.date}
            modifiers={day.modifiers}
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
    components: PropTypes.shape({
      Day: PropTypes.element.isRequired,
    }).isRequired,
    formatWeekNumber: PropTypes.func.isRequired,
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
