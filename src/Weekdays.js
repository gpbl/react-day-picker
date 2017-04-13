import React from 'react';
import PropTypes from './PropTypes';

export default function Weekdays({
  classNames,
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
      className: classNames.weekday,
      weekday,
      weekdaysLong,
      weekdaysShort,
      localeUtils,
      locale,
    };
    const element = React.isValidElement(weekdayElement)
      ? React.cloneElement(weekdayElement, elementProps)
      : React.createElement(weekdayElement, elementProps);
    days.push(element);
  }

  return (
    <div className={classNames.weekdays} role="rowgroup">
      <div className={classNames.weekdaysRow} role="row">
        {days}
      </div>
    </div>
  );
}

Weekdays.propTypes = {
  classNames: PropTypes.shape({
    weekday: PropTypes.string.isRequired,
    weekdays: PropTypes.string.isRequired,
    weekdaysRow: PropTypes.string.isRequired,
  }).isRequired,

  firstDayOfWeek: PropTypes.number.isRequired,
  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string.isRequired,
  localeUtils: PropTypes.localeUtils.isRequired,
  weekdayElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]),
};
