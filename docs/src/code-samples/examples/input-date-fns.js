import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import format from 'date-fns/format';
import parse from 'date-fns/parse';

export default function Example() {
  const FORMAT = 'M/D/YYYY';
  return (
    <DayPickerInput
      formatDate={format}
      format={FORMAT}
      parseDate={parse}
      placeholder={`${format(new Date(), FORMAT)}`}
    />
  );
}
