import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  firstDayOfWeek,
  weekdaysLong,
  weekdaysShort,
  locale,
  localeUtils,
  weekdayElement,
}) {
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    const weekday = (i + firstDayOfWeek) % 7;
    const elementProps = {
      key: i,
      className: 'DayPicker-Weekday',
      weekday,
      weekdaysLong,
      weekdaysShort,
      localeUtils,
      locale,
    };
    const element = React.cloneElement(weekdayElement, elementProps);
    days.push(element);
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
  firstDayOfWeek: PropTypes.number.isRequired,
  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayElement: PropTypes.element,
};
