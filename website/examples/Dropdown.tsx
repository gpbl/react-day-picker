import { DayPicker } from "react-day-picker";

export function Dropdown() {
  return (
    <>
      <DayPicker captionLayout="dropdown" fromYear={2015} toYear={2025} />
      <DayPicker
        captionLayout="dropdown-buttons"
        fromYear={2015}
        toYear={2025}
      />
    </>
  );
}
