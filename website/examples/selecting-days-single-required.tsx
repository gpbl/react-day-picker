import React from "react";
import { DayPicker } from "react-day-picker";

import { format } from "date-fns";

const today = new Date();

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState(today);

  const footer = selectedDay
    ? `You selected ${format(selectedDay, "PPP")}.`
    : `Please pick a day.`;

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}
