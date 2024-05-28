import { DayPicker } from "./react-day-picker-v8";

export function DropdownMultipleMonths() {
  return (
    <DayPicker
      numberOfMonths={5}
      captionLayout="dropdown-buttons"
      fromYear={2015}
      toYear={2025}
    />
  );
}
