import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Weekday extends Component {
  static propTypes = {
    weekday: PropTypes.number,
    className: PropTypes.string,
    locale: PropTypes.string,
    localeUtils: PropTypes.object,

    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
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
      <div className={className} role="columnheader">
        <abbr title={title}>{content}</abbr>
      </div>
    );
  }
}
