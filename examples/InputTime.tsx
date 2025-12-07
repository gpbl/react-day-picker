import { format, setHours, setMinutes } from "date-fns";
import React, {
  type ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { DayPicker } from "react-day-picker";

export function InputTime() {
  const [selected, setSelected] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  // Keep the time input in sync when the selected date changes elsewhere.
  useEffect(() => {
    if (selected) {
      setTimeValue(format(selected, "HH:mm"));
    }
  }, [selected]);

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    if (!selected) {
      // Defer composing a full Date until a day is picked.
      setTimeValue(time);
      return;
    }
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    // Compose a new Date using the current day plus the chosen time.
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
    // Apply the time value to the picked day.
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
