import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function Weekday({ weekday, className, localeUtils, locale }) {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  return (
    <div className={className} title={weekdayName}>
      {weekday} {weekdayName.slice(0, 1)}
    </div>
  );
}

function Navbar({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  localeUtils,
}) {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];
  const styleLeft = {
    float: 'left',
  };
  const styleRight = {
    float: 'right',
  };
  return (
    <div className={className}>
      <button style={styleLeft} onClick={() => onPreviousClick()}>
        ← {prev.slice(0, 3)}
      </button>
      <button style={styleRight} onClick={() => onNextClick()}>
        {next.slice(0, 3)} →
      </button>
    </div>
  );
}

export default function Example() {
  return (
    <div>
      <DayPicker weekdayElement={<Weekday />} navbarElement={<Navbar />} />
    </div>
  );
}
