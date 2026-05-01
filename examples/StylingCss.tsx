import { DayPicker } from "@daypicker/react";
import React from "react";

export function StylingCss() {
  const style = `
    .caption_aqua { 
      color: aquamarine; 
      font-weight: bold; 
      font-size: 140%; 
    }
  `;
  return (
    <>
      <style>{style}</style>
      <DayPicker
        classNames={{
          month_caption: "caption_aqua",
        }}
      />
    </>
  );
}
