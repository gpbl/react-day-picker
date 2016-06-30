import React from 'react';
import DayPicker, { WeekdayPropTypes, NavbarPropTypes } from '../../../src';

import '../../../src/style.css';

function Weekday({ weekday, className, localeUtils, locale }) {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  return (
    <div className={className} title={weekdayName}>
      {weekdayName.slice(0, 1)}
    </div>
  );
}
Weekday.propTypes = WeekdayPropTypes;

function Navbar({ nextMonth, previousMonth, onPreviousClick, onNextClick, className, localeUtils }) {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];
  return (
    <div className={className} style={{ fontSize: '.75em' }}>
      <span style={{ float: 'left', cursor: 'pointer' }} onClick={() => onPreviousClick()}>
        ← {prev.slice(0, 3)}
      </span>
      <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => onNextClick()}>
        {next.slice(0, 3)} →
      </span>
    </div>
  );
}
Navbar.propTypes = NavbarPropTypes;

export default function CustomElements() {
  return (
    <div>
      <DayPicker weekdayElement={<Weekday />} navbarElement={<Navbar />} />
    </div>
  );
}
