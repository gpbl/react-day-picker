import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';
import Weekdays from './Weekdays';
import { getWeekArray } from './Helpers';

export default function Month({
  month,
  locale,
  localeUtils,
  captionElement,
  onCaptionClick,
  children,
  firstDayOfWeek,
  className,
  wrapperClassName,
  weekClassName,
  weekdayComponent,
  weekdayElement,
  fixedWeeks,
}) {
  const captionProps = {
    date: month,
    localeUtils,
    locale,
    onClick: onCaptionClick ? e => onCaptionClick(e, month) : undefined,
  };
  const weeks = getWeekArray(month, firstDayOfWeek, fixedWeeks);
  return (
    <div className={ className }>
      {React.cloneElement(captionElement, captionProps)}
      <Weekdays
        locale={ locale }
        localeUtils={ localeUtils }
        weekdayComponent={ weekdayComponent }
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
  captionElement: PropTypes.node.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  onCaptionClick: PropTypes.func,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  weekClassName: PropTypes.string,
  weekdayComponent: PropTypes.func,
  weekdayElement: PropTypes.element,
  fixedWeeks: PropTypes.bool,
};
