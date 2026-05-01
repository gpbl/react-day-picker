import { DayPicker } from "@daypicker/react";
import React from "react";

export function SingleControlled() {
  const [selected, setSelected] = React.useState<Date | undefined>();
  return <DayPicker mode="single" onSelect={setSelected} selected={selected} />;
}
