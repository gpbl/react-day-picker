import React from "react";

import { DayPicker, type DayButtonProps } from "react-day-picker";

function HighlightDay(props: DayButtonProps) {
  return (
    <span {...props} style={{ whiteSpace: "nowrap" }}>
      {props.day.date.getDate() === 19 ? `🎉` : props.children}
    </span>
  );
}

export function CustomDayDate() {
  return <DayPicker mode="single" components={{ DayDate: HighlightDay }} />;
}
