import React from "react";
import { DayPicker } from "react-day-picker";

export function Example() {
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState(initialDays);

  const footer =
    days.length > 0
      ? `You picked ${days.length} day(s).`
      : `Please pick one or more days.`;

  return (
    <DayPicker
      mode="multiple"
      selected={days}
      onSelect={setDays}
      footer={footer}
    />
  );
}
