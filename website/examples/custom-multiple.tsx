import React from 'react';
import { DayPicker, ModifierStatus } from 'react-day-picker';

export default function App() {
  const [selectedDays, setSelectedDays] = React.useState([]);

  const handleDayClick = (
    day: Date,
    modifiers: ModifierStatus
  ) => {
    setSelectedDays((currentValue) => {
      const days = [...currentValue];
      if (modifiers.selected) {
        days.splice(currentValue.indexOf(day), 1);
      } else {
        days.push(day);
      }
      return days;
    });
  };

  const handleResetClick = () => setSelectedDays([]);

  let footer = <p>Please pick one or more days.</p>;

  if (selectedDays.length > 0)
    footer = (
      <p>
        You selected {selectedDays.length} days.{' '}
        <button onClick={handleResetClick}>Reset</button>
      </p>
    );

  return (
    <DayPicker
      mode="custom"
      onDayClick={handleDayClick}
      selected={selectedDays}
      footer={footer}
    />
  );
}
