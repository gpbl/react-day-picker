import React from 'react';
import PropTypes from 'prop-types';

import Head from './Head';
import Week from './Week';
import Caption from './Caption';

import { prepareMonth } from './helpers';

function Month({ month, dayPickerProps }) {
  const { locale, showCaption, showHead, classNames, styles } = dayPickerProps;
  const { weeks } = prepareMonth(month, dayPickerProps);
  return (
    <div className={classNames.month}>
      <table className={classNames.monthTable} style={styles.monthTable}>
        {showCaption && (
          <Caption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && (
          <Head
            locale={locale}
            showWeekNumber={dayPickerProps.showWeekNumber}
            dayPickerProps={dayPickerProps}
          />
        )}
        <tbody className={classNames.monthTbody} style={styles.monthTbody}>
          {Object.keys(weeks).map(weekNumber => (
            <Week
              key={weekNumber}
              week={weeks[weekNumber]}
              weekNumber={weekNumber}
              dayPickerProps={dayPickerProps}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  months: PropTypes.arrayOf(PropTypes.instanceOf(Date).isRequired).isRequired,
  dayPickerProps: PropTypes.shape({
    locale: PropTypes.object.isRequired,
    showCaption: PropTypes.bool,
    showHead: PropTypes.bool,
    showWeekNumber: PropTypes.bool,
    classNames: PropTypes.shape({
      month: PropTypes.string,
      monthTable: PropTypes.string,
      monthTbody: PropTypes.string,
    }),
    styles: PropTypes.shape({
      month: PropTypes.string,
      monthTable: PropTypes.string,
      monthTbody: PropTypes.string,
    }),
  }).isRequired,
};

export default Month;
