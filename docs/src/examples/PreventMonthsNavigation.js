import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function Example() {
  return <DayPicker canChangeMonth={false} />;
}

render(<Example />);
