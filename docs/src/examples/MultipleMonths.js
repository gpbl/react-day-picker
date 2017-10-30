import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function Example() {
  return <DayPicker numberOfMonths={2} fixedWeeks />;
}

render(<Example />);
