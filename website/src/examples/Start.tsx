import { Text } from "@radix-ui/themes";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export function Start() {
  const [selected, setSelected] = useState<Date>();

  return (
    <div role="application">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected ? (
            <Text as="p">You picked: {selected.toLocaleDateString()}</Text>
          ) : (
            <Text as="p">Pick a day</Text>
          )
        }
      />
    </div>
  );
}
