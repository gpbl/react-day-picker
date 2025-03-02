import React from "react";

import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

import customClassNames from "./AnimateCustom.module.css";

export function AnimateCustom() {
  return (
    <DayPicker
      animate
      classNames={{
        month_grid: `${classNames.month_grid} ${customClassNames["custom-month-grid"]}`,
        weekdays: customClassNames["custom-weekdays"],
        caption_prev_enter: customClassNames["animate-caption_prev_enter"],
        caption_prev_exit: customClassNames["animate-caption_prev_exit"],
        caption_next_enter: customClassNames["animate-caption_next_enter"],
        caption_next_exit: customClassNames["animate-caption_next_exit"],
        weeks_prev_enter: customClassNames["animate-weeks_prev_enter"],
        weeks_prev_exit: customClassNames["animate-weeks_prev_exit"],
        weeks_next_enter: customClassNames["animate-weeks_next_enter"],
        weeks_next_exit: customClassNames["animate-weeks_next_exit"]
      }}
    />
  );
}
