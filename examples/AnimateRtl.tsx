import { DayPicker } from "@daypicker/react";
import classNames from "@daypicker/react/style.module.css";
import { ar } from "date-fns/locale";
import React, { useState } from "react";

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
