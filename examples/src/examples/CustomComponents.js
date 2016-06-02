import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function Weekday({ weekday, className, localeUtils, locale }) {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  return (
    <div className={className} title={weekdayName}>
      {weekdayName.slice(0, 1)}
    </div>
  );
}

export default function CustomComponents() {
  return (
    <DayPicker weekdayComponent={Weekday} />
  );
}
