import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RoleTypesShape } from './PropTypes';

export default class Weekdays extends Component {
  static propTypes = {
    classNames: PropTypes.shape({
      weekday: PropTypes.string.isRequired,
      weekdays: PropTypes.string.isRequired,
      weekdaysRow: PropTypes.string.isRequired,
    }).isRequired,

    firstDayOfWeek: PropTypes.number.isRequired,
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
    showWeekNumbers: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    localeUtils: PropTypes.object.isRequired,
    weekdayElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
    ]),
    roles: PropTypes.shape(RoleTypesShape).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }
  render() {
    const {
      classNames,
      firstDayOfWeek,
      showWeekNumbers,
      weekdaysLong,
      weekdaysShort,
      locale,
      localeUtils,
      weekdayElement,
      roles,
    } = this.props;
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
        roles,
      };
      const element = React.isValidElement(weekdayElement)
        ? React.cloneElement(weekdayElement, elementProps)
        : React.createElement(weekdayElement, elementProps);
      days.push(element);
    }

    return (
      <div
        className={classNames.weekdays}
        role={roles.weekdays}
        aria-hidden={roles.weekdays === 'presentation'}
      >
        <div className={classNames.weekdaysRow} role={roles.weekdaysRow}>
          {showWeekNumbers && <div className={classNames.weekday} />}
          {days}
        </div>
      </div>
    );
  }
}
