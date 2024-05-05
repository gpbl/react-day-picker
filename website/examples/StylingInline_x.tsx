import { DayPicker } from "react-day-picker";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        caption: { color: "red" }
      }}
    />
  );
}
