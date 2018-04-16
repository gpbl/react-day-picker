import React from 'react';
import PropTypes from 'prop-types';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function CustomOverlay({ classNames, selectedDay, children }) {
  return (
    <div className={classNames.overlayWrapper} style={{ marginLeft: -100 }}>
      <div className={classNames.overlay}>
        <h3>Hello day picker!</h3>
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

CustomOverlay.propTypes = {
  classNames: PropTypes.object.isRequired,
  selectedDay: PropTypes.oneOfType([Date]),
  children: PropTypes.number.isRequired,
};

export default function Example() {
  return (
    <DayPickerInput
      overlayComponent={CustomOverlay}
      dayPickerProps={{
        todayButton: 'Today',
      }}
    />
  );
}
