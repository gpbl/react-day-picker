import React from "react";

import { DayPicker, faIR, getDateLib } from "react-day-picker/persian";

export function PersianFormatted() {
  const [selected, setSelected] = React.useState(new Date());
  const dateLib = getDateLib({
    locale: faIR,
    numerals: "arabext"
  });
  return (
    <DayPicker
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      footer={`انتخاب شده: ${dateLib.format(selected, "yyyy/MM/dd")}`}
    />
  );
}
