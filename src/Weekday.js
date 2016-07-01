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
  weekday: PropTypes.number,
  className: PropTypes.string,
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
};

Weekday.propTypes = WeekdayPropTypes;
