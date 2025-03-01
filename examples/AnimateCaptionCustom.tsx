import React from "react";

import { DayPicker } from "react-day-picker";

export function AnimateCaptionCustom() {
  return (
    <>
      <style>
        {`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
        .custom-caption_next_enter {
          animation: slide-up 0.3s ease-in-out forwards;
        }
        .custom-caption_next_exit {
          animation: slide-down 0.3s ease-in-out forwards;
        }
        .custom-caption_prev_enter {
          animation: slide-up 0.3s ease-in-out backwards;
        }
        .custom-caption_prev_exit {
          animation: slide-down 0.3s ease-in-out backwards;
        }
        `}
      </style>
      <DayPicker
        animate
        classNames={{
          caption_next_enter: "custom-caption_next_enter",
          caption_next_exit: "custom-caption_next_exit",
          caption_prev_enter: "custom-caption_prev_enter",
          caption_prev_exit: "custom-caption_prev_exit"
        }}
      />
    </>
  );
}
