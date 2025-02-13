import React from "react";

import { DayButtonProps, DayPicker } from "react-day-picker";

const SelectedDateContext = React.createContext<{
  selected?: Date;
  setSelected?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}>({});

function DayButton(props: DayButtonProps) {
  const { day, modifiers, ...buttonProps } = props;

  const { setSelected } = React.use(SelectedDateContext);
  return (
    <button
      {...buttonProps}
      onClick={() => setSelected?.(undefined)}
      onDoubleClick={() => setSelected?.(day.date)}
    />
  );
}

export function CustomDayButton() {
  const [selected, setSelected] = React.useState<Date>();

  return (
    <SelectedDateContext.Provider value={{ selected, setSelected }}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        components={{
          DayButton
        }}
        footer={selected?.toDateString() || "Double click to select a date"}
      />
    </SelectedDateContext.Provider>
  );
}
