// @ts-nocheck
import { ar } from "date-fns/locale";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker-v10";
import classNames from "react-day-picker-v10/style.module.css";

export function AnimateRtl() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      locale={ar}
      animate
      dir="rtl"
      selected={selected}
      onSelect={setSelected}
      classNames={classNames}
    />
  );
}
