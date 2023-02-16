import React from 'react';

import { DayPicker, useInput } from 'react-day-picker';

export default function App() {
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2021,
    toYear: 2023,
    format: 'PP',
    required: true
  });

  const footer = (
    <form>
      <label>
        <input
          {...inputProps}
          className="input-reset pa2 ma2 bg-white black ba"
        />
      </label>
    </form>
  );
  return <DayPicker {...dayPickerProps} footer={footer} />;
}
