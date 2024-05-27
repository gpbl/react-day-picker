import { DayPicker } from "./DayPicker";

export function ModifiersDisabled() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 5, 10)}
      mode="single"
      disabled={{ dayOfWeek: [0, 6] }}
    />
  );
}
