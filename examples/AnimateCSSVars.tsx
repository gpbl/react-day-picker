import { DayPicker } from "@daypicker/react";
import React from "react";

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
