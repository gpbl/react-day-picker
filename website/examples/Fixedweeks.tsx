import { DayPicker } from "./react-day-picker-v8";

export function FixedWeeks() {
  return (
    <DayPicker
      defaultMonth={new Date(2025, 8)}
      showWeekNumber
      showOutsideDays
      fixedWeeks
    />
  );
}
