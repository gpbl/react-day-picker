import React from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker-v9";

export function TailwindCSS() {
  const defaultClassNames = getDefaultClassNames();
  return (
    <>
      <style>
        {`
        .bg-amber-500 { background-color: #f59e0b; }
        .border-amber-500 { border-color: #f59e0b; }
        .text-white { color: #fff; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .p-5 { padding: 1.25rem; }
        .fill-amber-500 { fill: #f59e0b; }
        `}
      </style>
      <DayPicker
        mode="single"
        classNames={{
          today: `border-amber-500`,
          selected: `bg-amber-500 border-amber-500 text-white`,
          root: `${defaultClassNames.root} bg-white shadow-lg p-5`,
          chevron: `${defaultClassNames.chevron} fill-amber-500`,
        }}
      />
    </>
  );
}
