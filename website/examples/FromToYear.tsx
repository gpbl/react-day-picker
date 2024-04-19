import { DayPicker } from "react-day-picker";

export function FromToYear() {
  return (
    <DayPicker defaultMonth={new Date(2024, 0)} fromYear={2024} toYear={2026} />
  );
}
