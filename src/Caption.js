import React, { Component } from 'react';
import PropTypes from './PropTypes';

export default class Caption extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    months: PropTypes.arrayOf(PropTypes.string),
    locale: PropTypes.string,
    localeUtils: PropTypes.localeUtils,
    onClick: PropTypes.func,
    classNames: PropTypes.shape({
      caption: PropTypes.string.isRequired,
    }).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.locale !== this.props.locale ||
      nextProps.classNames !== this.props.classNames ||
      nextProps.date.getMonth() !== this.props.date.getMonth() ||
      nextProps.date.getFullYear() !== this.props.date.getFullYear()
    );
  }

  render() {
    const {
      classNames,
      date,
      months,
      locale,
      localeUtils,
      onClick,
    } = this.props;
    return (
      <div className={classNames.caption} role="heading">
        <div onClick={onClick}>
          {months
            ? `${months[date.getMonth()]} ${date.getFullYear()}`
            : localeUtils.formatMonthTitle(date, locale)}
        </div>
      </div>
    );
  }
}
