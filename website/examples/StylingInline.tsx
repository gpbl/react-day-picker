import { DayPicker } from "react-day-picker";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        month_caption: { color: "red" }
      }}
    />
  );
}
