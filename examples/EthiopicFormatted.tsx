import React from "react";

import { DayPicker, getDateLib } from "react-day-picker/ethiopic";

export function EthiopicFormatted() {
  const [selected, setSelected] = React.useState<Date>(new Date());
  const dateLib = getDateLib();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      footer={
        selected ? `ቀን: ${dateLib.format(selected, "yyyy-MM-dd")}` : "ቀን ይምረጡ"
      }
    />
  );
}
