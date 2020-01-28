import React from "react";
import { DayPicker, useInput } from "react-day-picker";

export function InputBindingExample() {
  const { month, selected, dayPickerProps, inputProps } = useInput(
    new Date(),
    "yyyy-MM-dd",
    { required: true }
  );

  return (
    <form className="center">
      <label>
        <p>Type a day or pick one from the calendar.</p>
        <input placeholder="YYYY-MM-DD" {...inputProps} />
      </label>
      <br />
      <DayPicker {...dayPickerProps} />
    </form>
  );
}
