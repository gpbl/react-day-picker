import { DayPicker } from "./react-day-picker-v8";

export function ModifiersDisabled() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 5, 10)}
      mode="single"
      disabled={{ dayOfWeek: [0, 6] }}
    />
  );
}
