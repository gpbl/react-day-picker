import React from 'react';
import PropTypes from './PropTypes';
import Weekdays from './Weekdays';
import { getWeekArray } from './Helpers';
import { getWeekNumber } from './DateUtils';

export default function Month({
  classNames,

  month,
  months,

  fixedWeeks,
  captionElement,
  weekdayElement,

  locale,
  localeUtils,
  weekdaysLong,
  weekdaysShort,
  firstDayOfWeek,

  onCaptionClick,
  children,

  footer,
  showWeekNumbers,
  onWeekClick,
}) {
  const captionProps = {
    date: month,
    classNames,
    months,
    localeUtils,
    locale,
    onClick: onCaptionClick ? e => onCaptionClick(month, e) : undefined,
  };
  const caption = React.isValidElement(captionElement)
    ? React.cloneElement(captionElement, captionProps)
    : React.createElement(captionElement, captionProps);

  const weeks = getWeekArray(month, firstDayOfWeek, fixedWeeks);

  return (
    <div className={classNames.month} role="grid">
      {caption}
      <Weekdays
        classNames={classNames}
        weekdaysShort={weekdaysShort}
        weekdaysLong={weekdaysLong}
        firstDayOfWeek={firstDayOfWeek}
        showWeekNumbers={showWeekNumbers}
        locale={locale}
        localeUtils={localeUtils}
        weekdayElement={weekdayElement}
      />
      <div className={classNames.body} role="rowgroup">
        {weeks.map(week => {
          let weekNumber;
          if (showWeekNumbers) {
            weekNumber = getWeekNumber(week[0]);
          }
          return (
            <div key={week[0].getTime()} className={classNames.week} role="row">
              {showWeekNumbers &&
                <div
                  className={classNames.weekNumber}
                  tabIndex={0}
                  role="gridcell"
                  onClick={e => onWeekClick(weekNumber, week, e)}
                >
                  {weekNumber}
                </div>}
              {week.map(day => children(day, month))}
            </div>
          );
        })}
      </div>
      {footer &&
        <div className={classNames.footer}>
          {footer}
        </div>}
    </div>
  );
}

Month.propTypes = {
  classNames: PropTypes.shape({
    month: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    week: PropTypes.string.isRequired,
  }).isRequired,

  month: PropTypes.instanceOf(Date).isRequired,
  months: PropTypes.arrayOf(PropTypes.string),

  fixedWeeks: PropTypes.bool,
  captionElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]).isRequired,
  weekdayElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]),

  footer: PropTypes.node,
  showWeekNumbers: PropTypes.bool,
  onWeekClick: PropTypes.func,

  locale: PropTypes.string.isRequired,
  localeUtils: PropTypes.localeUtils.isRequired,
  weekdaysLong: PropTypes.arrayOf(PropTypes.string),
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.number.isRequired,

  onCaptionClick: PropTypes.func,

  children: PropTypes.func.isRequired,
};
