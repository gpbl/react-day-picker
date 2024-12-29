import React from "react";

import { DayPicker, getDateLib, enUS } from "react-day-picker/persian";

export function PersianEn() {
  const [selected, setSelected] = React.useState(new Date());
  const dateLib = getDateLib({ locale: enUS });
  return (
    <DayPicker
      locale={enUS}
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      numerals="latn"
      footer={`Selected: ${dateLib.format(selected, "d MMM yyyy")}`}
    />
  );
}
