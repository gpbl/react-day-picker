import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  firstDayOfWeek,
  locale,
  localeUtils,
  weekdayComponent,
  weekdayElement,
}) {
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    const weekday = (i + firstDayOfWeek) % 7;
    const elementProps = {
      key: i,
      className: 'DayPicker-Weekday',
      weekday,
      localeUtils,
      locale,
    };
    const element = weekdayElement ?
      React.cloneElement(weekdayElement, elementProps) :
      React.createElement(weekdayComponent, elementProps);
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
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayComponent: PropTypes.func,
  weekdayElement: PropTypes.element,
};
