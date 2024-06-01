import React from "react";

import { DayPicker } from "react-day-picker";

export function HideNavigation() {
  return (
    <DayPicker hideNavigation disableNavigation captionLayout="dropdown" />
  );
}
