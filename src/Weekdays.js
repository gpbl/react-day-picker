import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  locale,
  localeUtils,
}) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={i} className="DayPicker-Weekday">
        <abbr title={localeUtils.formatWeekdayLong(i, locale)}>
          {localeUtils.formatWeekdayShort(i, locale)}
        </abbr>
      </div>
    );
  }

  return (
    <div className="DayPicker-Weekdays" role="rowgroup">
      <div className="DayPicker-WeekdaysRow" role="columnheader">
        {days}
      </div>
    </div>
  );
}

Weekdays.propTypes = {
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
};
