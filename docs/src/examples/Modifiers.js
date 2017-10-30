import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const modifiers = {
  disabled: { daysOfWeek: [6] },
  birthday: new Date(2018, 8, 19),
  mondays: { daysOfWeek: [1] },
};

function Example() {
  return <DayPicker month={new Date(2018, 8)} modifiers={modifiers} />;
}

render(<Example />);
