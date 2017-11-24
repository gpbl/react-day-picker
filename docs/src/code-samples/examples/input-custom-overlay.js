import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { LocaleUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

function CustomOverlay({ classNames, selectedDay, month, children }) {
  return (
    <div className={classNames.overlayWrapper} style={{ marginLeft: -100 }}>
      <div className={classNames.overlay}>
        <h3>{LocaleUtils.formatMonthTitle(month)}</h3>
        <p>
          {selectedDay
            ? `You picked: ${selectedDay.toLocaleDateString()}`
            : 'Please pick a day'}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function Example() {
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput
        placeholder="MM/DD/YYYY"
        overlayComponent={CustomOverlay}
      />
    </div>
  );
}
