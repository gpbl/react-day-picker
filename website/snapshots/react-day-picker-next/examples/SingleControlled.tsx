// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function SingleControlled() {
  const [selected, setSelected] = React.useState<Date | undefined>();
  return <DayPicker mode="single" onSelect={setSelected} selected={selected} />;
}
