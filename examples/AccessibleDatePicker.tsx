import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export function AccessibleDatePicker() {
  const [meetingDate, setMeetingDate] = useState<Date | undefined>(undefined);
  return (
    <div role="group" aria-labelledby="meeting-date">
      <h2 id="meeting-date">Meeting Date</h2>
      <DayPicker
        mode="single"
        onSelect={setMeetingDate}
        selected={meetingDate}
        labels={{
          labelCaption: () => "Select a date for the meeting",
          labelDay: (date, modifiers) => {
            return modifiers.selected
              ? `Selected Meeting Date: ${format(date, "PPP")}`
              : "";
          }
        }}
        footer={
          <p aria-live="polite">
            {meetingDate
              ? `Meeting date is set to ${format(meetingDate, "PPPP")}`
              : "Please pick a date for the meeting."}
          </p>
        }
      />
    </div>
  );
}
