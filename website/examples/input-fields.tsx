import React from "react";
import { DayPicker, useInput } from "react-day-picker";

export function Example() {
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2020,
    toYear: 2022,
    format: "PP",
    required: true,
  });

  const footer = (
    <form>
      <label>
        Please type a day: <input {...inputProps} />
      </label>
    </form>
  );
  return <DayPicker {...dayPickerProps} footer={footer} />;
}
