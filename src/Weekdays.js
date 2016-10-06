import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  locale,
  localeUtils,
  weekdayComponent,
  weekdayElement,
}) {
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    const elementProps = {
      key: i,
      className: 'DayPicker-Weekday',
      weekday: i,
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
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayComponent: PropTypes.func,
  weekdayElement: PropTypes.element,
};
