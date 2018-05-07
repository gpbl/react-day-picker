import React from 'react';
import PropTypes from 'prop-types';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function CustomOverlay({ classNames, selectedDay, children, ...props }) {
  return (
    <div
      className={classNames.overlayWrapper}
      style={{ marginLeft: -100 }}
      {...props}
    >
      <div className={classNames.overlay}>
        <h3>Hello day picker!</h3>
        <p>
          <input />
          <button onClick={() => console.log('clicked!')}>button</button>
        </p>
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
  selectedDay: PropTypes.instanceOf(Date),
  children: PropTypes.node.isRequired,
};

export default function Example() {
  return (
    <DayPickerInput
      overlayComponent={CustomOverlay}
      dayPickerProps={{
        todayButton: 'Today',
      }}
      keepFocus={false}
    />
  );
}
