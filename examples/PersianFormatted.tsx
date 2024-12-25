import React from "react";

import { DayPicker, getDateLib } from "react-day-picker/persian";

export function PersianFormatted() {
  const [selected, setSelected] = React.useState(new Date());
  const dateLib = getDateLib();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      footer={`Selected: ${dateLib.format(selected, "yyyy/MM/dd")}`}
    />
  );
}
