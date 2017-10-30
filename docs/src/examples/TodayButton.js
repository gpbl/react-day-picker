import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function Example() {
  return <DayPicker month={new Date(2017, 4, 5)} todayButton="Go to Today" />;
}

render(<Example />);
