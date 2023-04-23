import React from "react";

import { DayPicker } from "react-day-picker";

export default function App() {
  const [selected, setSelected] = React.useState<Date>();
  const [timeValue, setTimeValue] = React.useState<string>("");

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const time = event.target.value;
    if (selected) {
      const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
      const newDate = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), hours, minutes);
      setSelected(newDate);
    } else {
      setTimeValue(time);
    }
  };

  const handleDaySelect = (date: Date | undefined) => {
    if (timeValue && date) {
      const [hours, minutes] = timeValue.split(":").map((str) => parseInt(str, 10));
      const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
      setSelected(newDate);
    } else {
      setSelected(date);
    }
  };

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleDaySelect}
      />
      <input type="time" onChange={handleTimeChange} />
    </div>
  );
}
