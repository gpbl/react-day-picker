import React from "react";
import { DayClickEventHandler, DayPicker } from "react-day-picker";

export function Example() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();
  const handleDayClick: DayClickEventHandler = (day) =>
    setSelectedDay(day);

  const footer = selectedDay
    ? `You selected ${selectedDay.toLocaleDateString()}.`
    : "Please pick a day.";

  return (
    <DayPicker
      mode="custom"
      selected={selectedDay}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
