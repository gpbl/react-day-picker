import React from "react";

import { DayPicker, type DayButtonProps } from "react-day-picker";

function HighlightDay(props: DayButtonProps) {
  return (
    <span {...props} style={{ whiteSpace: "nowrap" }}>
      {props.day.date.getDate() === 19 ? `🎉` : props.children}
    </span>
  );
}

export function CustomDayButton() {
  return <DayPicker mode="single" components={{ DayButton: HighlightDay }} />;
}
