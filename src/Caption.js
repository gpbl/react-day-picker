import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocaleUtils from './LocaleUtils';

import { ENTER } from './keys';
import { RoleTypesShape, defaultRoles } from './DayPicker';

export default class Caption extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    months: PropTypes.arrayOf(PropTypes.string),
    locale: PropTypes.string,
    localeUtils: PropTypes.object,
    onClick: PropTypes.func,
    classNames: PropTypes.shape({
      caption: PropTypes.string.isRequired,
    }).isRequired,
    roles: PropTypes.shape(RoleTypesShape),
  };

  static defaultProps = {
    localeUtils: LocaleUtils,
    roles: defaultRoles,
  };

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.locale !== this.props.locale ||
      nextProps.classNames !== this.props.classNames ||
      nextProps.date.getMonth() !== this.props.date.getMonth() ||
      nextProps.date.getFullYear() !== this.props.date.getFullYear()
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === ENTER) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      classNames,
      date,
      months,
      locale,
      localeUtils,
      onClick,
      roles,
    } = this.props;
    return (
      <div className={classNames.caption} role={roles.caption}>
        <div onClick={onClick} onKeyUp={this.handleKeyUp}>
          {months
            ? `${months[date.getMonth()]} ${date.getFullYear()}`
            : localeUtils.formatMonthTitle(date, locale)}
        </div>
      </div>
    );
  }
}
