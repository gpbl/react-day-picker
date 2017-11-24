import React from 'react';
import { formatMonthTitle } from '../../../../src/LocaleUtils';
import DayPickerInput from '../../../../src/DayPickerInput';
import '../../../../src/style.css';
// import 'react-day-picker/lib/style.css';

function CustomOverlay({ classNames, selectedDay, month, children }) {
  return (
    <div className={classNames.overlayWrapper} style={{ marginLeft: -100 }}>
      <div className={classNames.overlay}>
        <h3>{formatMonthTitle(month)}</h3>
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
