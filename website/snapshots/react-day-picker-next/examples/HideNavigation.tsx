import React from "react";

import { DayPicker } from "react-day-picker-next";

export function HideNavigation() {
  return <DayPicker hideNavigation captionLayout="dropdown" />;
}
