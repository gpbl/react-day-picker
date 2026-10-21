import { DayPicker, getDateLib, psAF } from "@daypicker/persian";
import React from "react";

export function PashtoFormatted() {
  const [selected, setSelected] = React.useState(new Date());
  const dateLib = getDateLib({ locale: psAF, numerals: "arabext" });

  return (
    <DayPicker
      locale={psAF}
      dir="rtl"
      weekStartsOn={6}
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      footer={`ټاکل شوې نېټه: ${dateLib.format(selected, "yyyy/MM/dd")}`}
    />
  );
}
