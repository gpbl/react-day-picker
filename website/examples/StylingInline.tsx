import { DayPicker } from "./react-day-picker-v8";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        caption: { color: "red" }
      }}
    />
  );
}
