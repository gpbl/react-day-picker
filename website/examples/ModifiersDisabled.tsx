import { DayPicker } from "react-day-picker";

export function ModifiersDisabled() {
  return (
    <DayPicker
      defaultMonth={new Date(2022, 5, 10)}
      mode="single"
      disabled={{ dayOfWeek: [0, 6] }}
    />
  );
}
