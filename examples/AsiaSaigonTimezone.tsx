import React from "react";

import { DayPicker } from "react-day-picker";

export function AsiaSaigonTimezone() {
  return <DayPicker defaultMonth={new Date(1900, 11)} timeZone="Asia/Saigon" />;
}
