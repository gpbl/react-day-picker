import { DayPicker } from "./DayPicker";

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
