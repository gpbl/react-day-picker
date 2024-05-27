import { useState } from "react";

import { DayPicker, DayPickerProps } from "./DayPicker";

export function CustomSingle() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const modifiers: DayPickerProps["modifiers"] = {};
  if (selectedDate) {
    modifiers.selected = selectedDate;
  }
  return (
    <DayPicker
      modifiers={modifiers}
      onDayClick={(day, modifiers) => {
        if (modifiers.selected) {
          setSelectedDate(undefined);
        } else {
          setSelectedDate(day);
        }
      }}
      footer={selectedDate && `You selected ${selectedDate.toDateString()}`}
    />
  );
}
