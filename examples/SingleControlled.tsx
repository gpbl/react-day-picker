import React from "react";

import { DayPicker } from "react-day-picker";

export function SingleControlled() {
  const [selected, setSelected] = React.useState<Date | undefined>();
  return <DayPicker mode="single" onSelect={setSelected} selected={selected} />;
}
