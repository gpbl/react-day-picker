import React from "react";

import { DayPicker } from "react-day-picker-next";

export function AnimateCSSVars() {
  return (
    <>
      <style>
        {`
        .custom-animate {
          --rdp-animation_duration: .1s;
          --rdp-animation_timing: ease-in;
          }
        `}
      </style>
      <DayPicker className="custom-animate" animate />
    </>
  );
}
