import React from "react";

import { DayPicker } from "react-day-picker";

export function CustomDayButton() {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker
      mode="single"
      onSelect={setSelected}
      selected={selected}
      components={{
        DayButton: (props) => {
          const { day, modifiers, ...buttonProps } = props;
          return (
            <button
              {...buttonProps}
              onDoubleClick={() => setSelected(day.date)}
              onClick={() => setSelected(undefined)}
            />
          );
        }
      }}
      footer={selected?.toDateString() || "Double click to select a date"}
    />
  );
}
