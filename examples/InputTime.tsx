import { setHours, setMinutes } from "date-fns";
import React, { type ChangeEventHandler, useState } from "react";
import { DayPicker } from "react-day-picker";

export function InputTime() {
  const [selected, setSelected] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    if (!selected) {
      setTimeValue(time);
      return;
    }
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const newSelectedDate = setHours(setMinutes(selected, minutes), hours);
    setSelected(newSelectedDate);
    setTimeValue(time);
  };

  const handleDaySelect = (date: Date | undefined) => {
    if (!timeValue || !date) {
      setSelected(date);
      return;
    }
    const [hours, minutes] = timeValue
      .split(":")
      .map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
    );
    setSelected(newDate);
  };

  return (
    <div>
      <form style={{ marginBlockEnd: "1em" }}>
        <label>
          Set the time:{" "}
          <input type="time" value={timeValue} onChange={handleTimeChange} />
        </label>
      </form>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleDaySelect}
        footer={`Selected date: ${selected ? selected.toLocaleString() : "none"}`}
      />
    </div>
  );
}
