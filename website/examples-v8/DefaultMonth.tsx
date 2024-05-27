import { DayPicker } from "./react-day-picker-v8";

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
