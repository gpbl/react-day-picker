import React from "react";
import { DayClickEventHandler, DayPicker } from "react-day-picker";

export default function App() {
  const [selectedDays, setSelectedDays] = React.useState([]);

  const handleDayClick: DayClickEventHandler = (
    day,
    { selected }
  ) => {
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
      "Please pick one or more days."
    ) : (
      <p>
        You selected {selectedDays.length} days.{" "}
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
