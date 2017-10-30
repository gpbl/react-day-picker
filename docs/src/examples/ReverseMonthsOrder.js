import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function Example() {
  return (
    <DayPicker
      numberOfMonths={12}
      month={new Date(2018, 0)}
      pagedNavigation
      reverseMonths
      fixedWeeks
    />
  );
}

render(<Example />);
