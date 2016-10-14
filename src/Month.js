import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import Weekdays from './Weekdays';
import { getWeekArray } from './Helpers';

export default function Month({
  month,
  months,
  weekdaysLong,
  weekdaysShort,
  locale,
  localeUtils,
  captionElement,
  onCaptionClick,
  children,
  firstDayOfWeek,
  className,
  wrapperClassName,
  weekClassName,
  weekdayElement,
  fixedWeeks,
}) {
  const captionProps = {
    date: month,
    months,
    localeUtils,
    locale,
    onClick: onCaptionClick ? e => onCaptionClick(e, month) : undefined,
  };
  const weeks = getWeekArray(month, firstDayOfWeek, fixedWeeks);
  return (
    <div className={ className }>
      {React.cloneElement(captionElement, captionProps)}
      <Weekdays
        weekdaysShort={ weekdaysShort }
        weekdaysLong={ weekdaysLong }
        firstDayOfWeek={ firstDayOfWeek }
        locale={ locale }
        localeUtils={ localeUtils }
        weekdayElement={ weekdayElement }
      />
      <div className={ wrapperClassName } role="grid">
        {
          weeks.map((week, j) =>
            <div key={ j } className={ weekClassName } role="gridcell">
              {week.map(day => children(day, month))}
            </div>
        )}
      </div>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  months: React.PropTypes.arrayOf(React.PropTypes.string),
  captionElement: PropTypes.node.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  onCaptionClick: PropTypes.func,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  weekClassName: PropTypes.string,
  weekdayElement: PropTypes.element,
  fixedWeeks: PropTypes.bool,
};
