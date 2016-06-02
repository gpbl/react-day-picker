import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  locale,
  localeUtils,
  weekdayComponent,
}) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      React.createElement(weekdayComponent, {
        key: i,
        className: 'DayPicker-Weekday',
        weekday: i,
        localeUtils,
        locale,
      })
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
  weekdayComponent: PropTypes.func.isRequired,
};
