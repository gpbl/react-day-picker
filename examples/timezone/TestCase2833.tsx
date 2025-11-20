import React from "react";

import { DayPicker, TZDate } from "react-day-picker";

const now = new Date();

export function TestCase2833() {
  const timeZone = "Etc/GMT+12";
  return (
    <div>
      <p data-testid="now">now: {now.toString()}</p>
      <p data-testid="timezone">time-zone: {timeZone}</p>
      <p>disabled before: {TZDate.tz(timeZone).toString()}</p>
      <DayPicker
        mode="single"
        timeZone={timeZone}
        disabled={{ before: now }}
        selected={now}
      />
    </div>
  );
}
