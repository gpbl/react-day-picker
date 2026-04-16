// @ts-nocheck
import React, { useState } from "react";

import { DayPicker, type DayPickerProps } from "../dist/esm/index.js";

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
