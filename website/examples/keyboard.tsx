import { useState } from "react";

import { DayPicker, DayPickerSingleProps } from "react-day-picker";

export function Keyboard(props: DayPickerSingleProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  return (
    <DayPicker
      {...props}
      selected={selected}
      onSelect={setSelected}
      mode="single"
      today={new Date(2022, 5, 10)}
    />
  );
}
