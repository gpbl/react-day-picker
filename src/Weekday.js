import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ENTER } from './keys';

export default class Weekday extends Component {
  static propTypes = {
    weekday: PropTypes.number,
    className: PropTypes.string,
    locale: PropTypes.string,
    localeUtils: PropTypes.object,
    onWeekdayClick: PropTypes.func,

    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  onClick = () => {
    const { onWeekdayClick, weekday } = this.props;
    if (typeof onWeekdayClick === 'function') {
      onWeekdayClick(weekday);
    }
  };

  handleKeyUp = e => {
    if (e.keyCode === ENTER) {
      this.onClick(e);
    }
  };

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
      <div
        className={className}
        onClick={this.onClick}
        onKeyUp={this.handleKeyUp}
        role="columnheader"
        tabIndex="-1"
      >
        <abbr title={title}>{content}</abbr>
      </div>
    );
  }
}
