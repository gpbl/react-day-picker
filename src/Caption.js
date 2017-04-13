import React from 'react';
import PropTypes from './PropTypes';

export default function Caption({
  classNames,
  date,
  months,
  locale,
  localeUtils,
  onClick,
}) {
  return (
    <div className={classNames.caption} onClick={onClick} role="heading">
      {months
        ? `${months[date.getMonth()]} ${date.getFullYear()}`
        : localeUtils.formatMonthTitle(date, locale)}
    </div>
  );
}

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
  months: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  localeUtils: PropTypes.localeUtils,
  onClick: PropTypes.func,
  classNames: PropTypes.shape({
    caption: PropTypes.string.isRequired,
  }).isRequired,
};
