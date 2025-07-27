import { isSameDay } from "date-fns";
import React, { useState } from "react";
import { type DayEventHandler, DayPicker } from "react-day-picker";

export function CustomMultiple() {
  const [value, setValue] = useState<Date[]>([]);

  const handleDayClick: DayEventHandler<React.MouseEvent> = (
    day,
    modifiers,
  ) => {
    const newValue = [...value];
    if (modifiers.selected) {
      const index = value.findIndex((d) => isSameDay(day, d));
      newValue.splice(index, 1);
    } else {
      newValue.push(day);
    }
    setValue(newValue);
  };

  const handleResetClick = () => setValue([]);

  let footer = <>Please pick one or more days.</>;

  if (value.length > 0)
    footer = (
      <>
        You selected {value.length} days.{" "}
        <button type="button" onClick={handleResetClick}>
          Reset
        </button>
      </>
    );

  return (
    <DayPicker
      onDayClick={handleDayClick}
      modifiers={{ selected: value }}
      footer={footer}
    />
  );
}
