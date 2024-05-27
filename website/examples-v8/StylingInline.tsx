import { DayPicker } from "./DayPicker";

export function StylingInline() {
  return (
    <DayPicker
      styles={{
        caption: { color: "red" }
      }}
    />
  );
}
