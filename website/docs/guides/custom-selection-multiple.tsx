import * as React from 'react';

import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const [selectedDays, setSelectedDays] = React.useState([]);

  const handleDayClick: DayClickEventHandler = (day, { selected }) => {
    // Use a callback to clone and add / remove days to the array
    setSelectedDays((currentlySelectedDays) => {
      const days = [...currentlySelectedDays];
      if (selected) {
        days.splice(currentlySelectedDays.indexOf(day), 1);
      } else {
        days.push(day);
      }
      return days;
    });
  };

  const handleResetClick = () => setSelectedDays([]);

  const footer =
    selectedDays.length === 0 ? (
      'Please pick one or more days.'
    ) : (
      <p>
        You selected {selectedDays.length} days.{' '}
        <button onClick={handleResetClick}>Reset</button>
      </p>
    );

  return (
    <DayPicker
      mode="uncontrolled"
      onDayClick={handleDayClick}
      selected={selectedDays}
      footer={footer}
    />
  );
}
