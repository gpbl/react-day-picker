import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RoleTypesShape } from './DayPicker';

export default class Weekday extends Component {
  static propTypes = {
    weekday: PropTypes.number,
    className: PropTypes.string,
    locale: PropTypes.string,
    localeUtils: PropTypes.object,

    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),

    roles: PropTypes.shape(RoleTypesShape),
  };
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }
  render() {
    const {
      weekday,
      className,
      weekdaysLong,
      weekdaysShort,
      localeUtils,
      locale,
      roles,
    } = this.props;
    let title;
    if (weekdaysLong) {
      title = weekdaysLong[weekday];
    } else {
      title = localeUtils.formatWeekdayLong(weekday, locale);
    }
    let content;
    if (weekdaysShort) {
      content = weekdaysShort[weekday];
    } else {
      content = localeUtils.formatWeekdayShort(weekday, locale);
    }

    return (
      <div className={className} role={roles.columnHeader}>
        <abbr title={title}>{content}</abbr>
      </div>
    );
  }
}
