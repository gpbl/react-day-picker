import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekday({ weekday, className, localeUtils, locale }) {
  return (
    <div className={className}>
      <abbr title={localeUtils.formatWeekdayLong(weekday, locale)}>
        {localeUtils.formatWeekdayShort(weekday, locale)}
      </abbr>
    </div>
  );
}

export const WeekdayPropTypes = {
  weekday: PropTypes.number.isRequired,
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
};

Weekday.propTypes = WeekdayPropTypes;
