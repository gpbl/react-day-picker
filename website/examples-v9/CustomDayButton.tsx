import React from "react";

import { DayButton, type DayButtonProps, DayPicker } from "react-day-picker-v9";

const SelectedDateContext = React.createContext<{
  selected?: Date;
  setSelected?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}>({});

function DayButtonWithContext(props: DayButtonProps) {
  const { day, modifiers, ...buttonProps } = props;

  const { setSelected } = React.use(SelectedDateContext);
  return (
    <DayButton
      {...buttonProps}
      day={day}
      modifiers={modifiers}
      onClick={() => setSelected?.(undefined)}
      onDoubleClick={() => setSelected?.(day.date)}
    />
  );
}

export function CustomDayButton() {
  const [selected, setSelected] = React.useState<Date>();

  return (
    <SelectedDateContext.Provider value={{ selected, setSelected }}>
      <p>Double click to select a date or single click to clear selection</p>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        components={{
          DayButton: DayButtonWithContext,
        }}
        footer={selected?.toDateString()}
      />
    </SelectedDateContext.Provider>
  );
}
