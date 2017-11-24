import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Weekdays from './Weekdays';
import Day from './Day';
import { ENTER } from './keys';

import * as ModifiersUtils from './ModifiersUtils';
import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';

export default class Month extends Component {
  static propTypes = {
    classNames: PropTypes.shape({
      body: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      outside: PropTypes.string.isRequired,
      today: PropTypes.string.isRequired,
      week: PropTypes.string.isRequired,
    }).isRequired,
    tabIndex: PropTypes.number,

    month: PropTypes.instanceOf(Date).isRequired,
    months: PropTypes.arrayOf(PropTypes.string),

    modifiersStyles: PropTypes.object,

    enableOutsideDays: PropTypes.bool,

    renderDay: PropTypes.func.isRequired,
    renderWeek: PropTypes.func.isRequired,

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
    fixedWeeks: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,

    locale: PropTypes.string.isRequired,
    localeUtils: PropTypes.object.isRequired,
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
    firstDayOfWeek: PropTypes.number.isRequired,

    onCaptionClick: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayFocus: PropTypes.func,
    onDayKeyDown: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayMouseDown: PropTypes.func,
    onDayMouseUp: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onWeekClick: PropTypes.func,
  };

  renderDay = day => {
    const monthNumber = this.props.month.getMonth();
    const propModifiers = Helpers.getModifiersFromProps(this.props);
    const dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
    if (
      DateUtils.isSameDay(day, new Date()) &&
      !Object.prototype.hasOwnProperty.call(
        propModifiers,
        this.props.classNames.today
      )
    ) {
      dayModifiers.push(this.props.classNames.today);
    }
    if (day.getMonth() !== monthNumber) {
      dayModifiers.push(this.props.classNames.outside);
    }

    const isOutside = day.getMonth() !== monthNumber;
    let tabIndex = -1;
    // Focus on the first day of the month
    if (this.props.onDayClick && !isOutside && day.getDate() === 1) {
      tabIndex = this.props.tabIndex; // eslint-disable-line prefer-destructuring
    }
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;
    const modifiers = {};
    dayModifiers.forEach(modifier => {
      modifiers[modifier] = true;
    });

    return (
      <Day
        key={`${isOutside ? 'outside-' : ''}${key}`}
        classNames={this.props.classNames}
        day={day}
        modifiers={modifiers}
        modifiersStyles={this.props.modifiersStyles}
        empty={
          isOutside && !this.props.enableOutsideDays && !this.props.fixedWeeks
        }
        tabIndex={tabIndex}
        ariaLabel={this.props.localeUtils.formatDay(day, this.props.locale)}
        ariaDisabled={isOutside || dayModifiers.indexOf('disabled') > -1}
        ariaSelected={dayModifiers.indexOf('selected') > -1}
        onClick={this.props.onDayClick}
        onFocus={this.props.onDayFocus}
        onKeyDown={this.props.onDayKeyDown}
        onMouseEnter={this.props.onDayMouseEnter}
        onMouseLeave={this.props.onDayMouseLeave}
        onMouseDown={this.props.onDayMouseDown}
        onMouseUp={this.props.onDayMouseUp}
        onTouchEnd={this.props.onDayTouchEnd}
        onTouchStart={this.props.onDayTouchStart}
      >
        {this.props.renderDay(day, modifiers)}
      </Day>
    );
  };

  render() {
    const {
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

      footer,
      showWeekNumbers,
      onWeekClick,
    } = this.props;

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

    const weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);

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
              weekNumber = DateUtils.getWeekNumber(week[0]);
            }
            return (
              <div
                key={week[0].getTime()}
                className={classNames.week}
                role="row"
              >
                {showWeekNumbers && (
                  <div
                    className={classNames.weekNumber}
                    tabIndex={0}
                    role="gridcell"
                    onClick={e => onWeekClick(weekNumber, week, e)}
                    onKeyUp={e =>
                      e.keyCode === ENTER && onWeekClick(weekNumber, week, e)
                    }
                  >
                    {this.props.renderWeek(weekNumber, week, month)}
                  </div>
                )}
                {week.map(this.renderDay)}
              </div>
            );
          })}
        </div>
        {footer && <div className={classNames.footer}>{footer}</div>}
      </div>
    );
  }
}
