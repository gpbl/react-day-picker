import React from "react";

import { DayPicker } from "react-day-picker";

import "./AnimateCaptionCustom.css";

export function AnimateCaptionCustom() {
  return (
    <DayPicker
      animate
      classNames={{
        caption_prev_enter: "animate-caption_prev_enter",
        caption_prev_exit: "animate-caption_prev_exit",
        caption_next_enter: "animate-caption_next_enter",
        caption_next_exit: "animate-caption_next_exit"
        // These animations are not working properly
        // weeks_prev_enter: "animate-weeks_prev_enter",
        // weeks_prev_exit: "animate-weeks_prev_exit",
        // weeks_next_enter: "animate-weeks_next_enter",
        // weeks_next_exit: "animate-week_next_exit"
      }}
    />
  );
}
