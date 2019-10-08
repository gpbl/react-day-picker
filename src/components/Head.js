import React from 'react';
import PropTypes from 'prop-types';

import getWeekdaysNames from './utils/getWeekdaysNames';

function Head({ locale, showWeekNumber, dayPickerProps }) {
  const { classNames, styles, formatWeekdayName } = dayPickerProps;
  const weekdayNames = getWeekdaysNames(locale, formatWeekdayName);
  return (
    <thead style={styles.head} className={classNames.head}>
      <tr style={styles.headRow} className={classNames.headRow}>
        {showWeekNumber && (
          <th
            style={styles.headWeekNumber}
            className={classNames.headWeekNumber}
          ></th>
        )}
        {weekdayNames.map((name, i) => (
          <th
            key={i}
            scope="col"
            style={styles.headWeekName}
            className={classNames.headWeekName}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

Head.propTypes = {
  showWeekNumber: PropTypes.bool,
  locale: PropTypes.object,
  dayPickerProps: PropTypes.shape({
    classNames: PropTypes.shape({
      head: PropTypes.string,
      headRow: PropTypes.string,
      headWeekNumber: PropTypes.string,
      headWeekName: PropTypes.string,
    }),
    styles: PropTypes.shape({
      head: PropTypes.string,
      headRow: PropTypes.string,
      headWeekNumber: PropTypes.string,
      headWeekName: PropTypes.string,
    }),
    formatWeekdayName: PropTypes.func.isRequired,
  }).isRequired,
};

export default Head;
