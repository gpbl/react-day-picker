import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

function Example() {
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput placeholder="MM/DD/YYYY" />
    </div>
  );
}

render(<Example />);
