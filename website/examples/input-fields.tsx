import React from 'react';
import { DayPicker, useInput, UseInputOptions } from 'react-day-picker';

import { format } from 'date-fns';

export function Example() {
  // Props to pass to `useInput`
  const options: UseInputOptions = {
    // Select today as default
    defaultSelected: new Date(),
    // Limit the valid dates
    fromYear: 2020,
    toYear: 2022,
    format: 'PP',
    // Make the selection mandatory.
    required: true
  };
  const input = useInput(options);

  const footer = (
    <form>
      <input
        {...input.fieldProps}
        placeholder={format(new Date(), options.format)}
      />
    </form>
  );
  return (
    <>
      <p>Type a day or pick one from the calendar.</p>
      <DayPicker {...input.dayPickerProps} showWeekNumber footer={footer} />
    </>
  );
}
