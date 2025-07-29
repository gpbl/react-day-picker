import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

export function AccessibleDatePicker() {
  const [meetingDate, setMeetingDate] = useState<Date | undefined>(undefined);
  return (
    <DayPicker
      mode="single"
      onSelect={setMeetingDate}
      selected={meetingDate}
      labels={{
        labelDayButton: (date, modifiers) => {
          return modifiers.selected
            ? `Selected Meeting Date: ${format(date, "PPP")}`
            : "";
        },
      }}
      footer={
        meetingDate
          ? `Meeting date is set to ${format(meetingDate, "PPPP")}`
          : "Please pick a date for the meeting."
      }
    />
  );
}
